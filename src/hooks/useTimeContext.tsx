"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

interface TimeContextType {
  currentTime: Date;
  timeOfDay: string;
  colorScheme: { main: string; alt: string };
  currentTheme: "light" | "dark" | "alt";
}

const TimeContext = createContext<TimeContextType | undefined>(undefined);

const getTimeOfDay = (hour: number): string => {
  if (hour >= 0 && hour < 4) return "witching hour";
  if (hour >= 4 && hour < 8) return "early morning";
  if (hour >= 8 && hour < 12) return "morning";
  if (hour >= 12 && hour < 16) return "afternoon";
  if (hour >= 16 && hour < 20) return "evening";
  return "night";
};

const getColorScheme = (hour: number) => {
  if (hour >= 0 && hour < 4) return { main: "#000C28", alt: "#3245A0" };
  if (hour >= 4 && hour < 8) return { main: "#2E6BF6", alt: "#F3B3AB" };
  if (hour >= 8 && hour < 12) return { main: "#DBF883", alt: "#5A90F0" };
  if (hour >= 12 && hour < 16) return { main: "#418F95", alt: "#BDDDCC" };
  if (hour >= 16 && hour < 20) return { main: "#F7EECA", alt: "#AD2470" };
  return { main: "#2A226D", alt: "#E191E5" };
};

export const TimeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [timeContext, setTimeContext] = useState<TimeContextType>({
    currentTime: new Date(),
    timeOfDay: "",
    colorScheme: { main: "", alt: "" },
    currentTheme: "alt",
  });

  const updateTime = useCallback(() => {
    const now = new Date();
    // Get the hour in Chicago timezone using Intl.DateTimeFormat
    const chicagoTimeFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago",
      hour: "numeric",
      hour12: false,
    });
    const chicagoHour = parseInt(chicagoTimeFormatter.format(now), 10);

    // Create a Date object representing the current time (for display)
    // The formatTime function will handle timezone conversion for display
    const newColorScheme = getColorScheme(chicagoHour);
    setTimeContext((prev) => ({
      ...prev,
      currentTime: now, // Keep original Date, formatTime handles timezone
      timeOfDay: getTimeOfDay(chicagoHour),
      colorScheme: newColorScheme,
    }));
  }, []);

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000); //update every second

    return () => clearInterval(interval);
  }, [updateTime]);

  return (
    <TimeContext.Provider value={timeContext}>{children}</TimeContext.Provider>
  );
};

export const useTimeContext = () => {
  const context = useContext(TimeContext);
  if (context === undefined) {
    throw new Error("useTimeContext must be used within a TimeProvider");
  }
  return context;
};
