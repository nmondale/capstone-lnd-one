"use client";

import { useState, useEffect } from "react";
import { setTheme as setThemeColors } from "../lib/theme";

export const useTheme = (colorScheme: { main: string; alt: string }) => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark" | "alt">(
    () => {
      let storedTheme: "light" | "dark" | "alt" | null = null;
      if (typeof window !== "undefined") {
        storedTheme = localStorage.getItem("theme") as
          | "light"
          | "dark"
          | "alt"
          | null;
      }
      const theme = storedTheme || "alt";
      if (theme === "alt") {
        setThemeColors("alt", colorScheme.main, colorScheme.alt);
      } else {
        setThemeColors(theme);
      }
      return theme;
    }
  );
  const [isAltInverted, setIsAltInverted] = useState(false);

  useEffect(() => {
    if (currentTheme === "alt") {
      const { main, alt } = colorScheme;
      setThemeColors(
        "alt",
        isAltInverted ? alt : main,
        isAltInverted ? main : alt
      );
    } else {
      setThemeColors(currentTheme);
    }
  }, [currentTheme, isAltInverted, colorScheme]);

  const setTheme = (theme: "light" | "dark" | "alt") => {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
    if (theme === "alt") {
      const { main, alt } = colorScheme;
      setThemeColors(
        "alt",
        isAltInverted ? alt : main,
        isAltInverted ? main : alt
      );
    } else {
      setThemeColors(theme);
    }
  };

  const toggleAltInversion = () => {
    setIsAltInverted((prev) => !prev);
    const { main, alt } = colorScheme;
    setThemeColors(
      "alt",
      isAltInverted ? main : alt,
      isAltInverted ? alt : main
    );
  };

  return { currentTheme, setTheme, toggleAltInversion, isAltInverted };
};
