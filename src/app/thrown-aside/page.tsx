"use client";

import React from "react";
import { useTimeContext } from "../../hooks/useTimeContext";

const ThrownAside: React.FC = () => {
  const { currentTheme } = useTimeContext();

  return (
    <div
      className={`min-h-screen p-0 m-0 bg-alt text-alt ${
        currentTheme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <h1>ThrownAside Content</h1>
      {/* Add your page-specific content here */}
    </div>
  );
};

export default ThrownAside;
