export interface UsaceTimeSeriesData {
    "time-series": {
      "query-info": {
        "time-of-query": string;
        "total-values-retrieved": number;
      };
      "time-series": Array<{
        name: string;
        "regular-interval-values": {
          unit: string;
          segments: Array<{
            "first-time": string;
            "last-time": string;
            values: Array<[number, number]>;
          }>;
        };
      }>;
    };
  }
  
export interface WaterData {
  elevation: number;
  elevationUnit: string;
  lastUpdated: string;
}

export interface Measurement {
  name: string;
  label: string;
  property: keyof WaterData;
  transform: (value: number) => string;
}

export interface VesselData {
  direction: string;
  vesselName: string;
  arrivalDate: string;
  solDate: string;
  endOfLockage: string;
  timezone: string;
  numBarges: number | null;
}