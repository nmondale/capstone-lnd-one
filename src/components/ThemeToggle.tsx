import React from "react";
import { useTheme } from "../hooks/UseTheme";
import { useTimeContext } from "../hooks/useTimeContext";

export const ThemeToggle: React.FC = () => {
  const { colorScheme } = useTimeContext();
  const { currentTheme, setTheme, toggleAltInversion, isAltInverted } =
    useTheme(colorScheme);

  const handleAltClick = () => {
    if (currentTheme === "alt") {
      toggleAltInversion();
    } else {
      setTheme("alt");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setTheme("dark")}
        className={`w-8 h-8 rounded-full border border-solid ${
          currentTheme === "dark" ? "bg-main border-alt" : "bg-alt border-alt"
        }`}
      />
      <button
        onClick={handleAltClick}
        className="w-8 h-8 rounded-full border border-solid bg-main border-alt flex items-center justify-center my-2"
      >
        <div className="w-4 h-4 rounded-full bg-alt" />
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`w-8 h-8 rounded-full border border-solid ${
          currentTheme === "light" || currentTheme === "alt"
            ? "bg-main"
            : "bg-alt"
        } border-alt`}
      />
    </div>
  );
};
