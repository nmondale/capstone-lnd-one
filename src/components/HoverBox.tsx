"use client";

import React from "react";
import { useTimeContext } from "../hooks/useTimeContext";

interface HoverBoxProps {
  title: string;
  x: number;
  y: number;
}

const HoverBox: React.FC<HoverBoxProps> = ({ title, x, y }) => {
  const { currentTheme } = useTimeContext();

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        backgroundColor: "var(--main-color)",
        borderColor: "var(--alt-color)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "2rem",
        padding: "5px 10px",
        pointerEvents: "none",
      }}
      className={`text-sm ${
        currentTheme === "dark" ? "text-white" : "text-black"
      }`}
    >
      {title}
    </div>
  );
};

export default HoverBox;
