import { NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const response = await axios.get(
      'https://ndc.ops.usace.army.mil/ords/lpms/json/traffic_report?in_river=MI&in_lock=01',
      {
        headers: {
          'Accept': 'application/json'
        },
        timeout: 5000 // 5 second timeout
      }
    );

    if (!response.data) {
      throw new Error('No data received from USACE API');
    }

    // Log only in production
    if (process.env.NODE_ENV === 'production') {
      console.log(`Successfully fetched vessel data at ${new Date().toISOString()}`);
    }

    return NextResponse.json(response.data);
  } catch (error) {
    // Type guard for AxiosError
    const axiosError = error as AxiosError;
    
    // Detailed error logging in production
    if (process.env.NODE_ENV === 'production') {
      console.error('Vessel traffic API error:', {
        timestamp: new Date().toISOString(),
        error: axiosError.message,
        status: axiosError.response?.status,
        data: axiosError.response?.data
      });
    }

    return NextResponse.json(
      { error: 'Failed to fetch vessel data' },
      { status: 500 }
    );
  }
}