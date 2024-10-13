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
    const stPaulTime = new Date(
      now.toLocaleString("en-US", { timeZone: "America/Chicago" })
    );
    const hour = stPaulTime.getHours();
    const newColorScheme = getColorScheme(hour);
    setTimeContext((prev) => ({
      ...prev,
      currentTime: stPaulTime,
      timeOfDay: getTimeOfDay(hour),
      colorScheme: newColorScheme,
    }));
  }, []);

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

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
