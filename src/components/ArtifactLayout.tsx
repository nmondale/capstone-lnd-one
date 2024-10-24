"use client";

import React from "react";
import Link from "next/link";
import { useTimeContext } from "../hooks/useTimeContext";
import "../app/styles/homepage-styles.css";
import { ThemeToggle } from "./ThemeToggle";

interface ArtifactLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  parentPage: string;
  artifacts: string[];
  currentArtifact: string;
}

const ArtifactLayout: React.FC<ArtifactLayoutProps> = ({
  children,
  title,
  description,
  parentPage,
  artifacts,
  currentArtifact,
}) => {
  const { currentTheme } = useTimeContext();

  return (
    <div
      className={`min-h-screen bg-main text-alt ${
        currentTheme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <div className="flex flex-row h-screen">
        <div className="w-[20%] container-box">
          <Link
            href={"/"}
            className="text-nav font-bold flex items-center justify-center p-4 border-b border-alt"
          >
            &lt;- Return Home
          </Link>
          <h1 className="text-3xl pt-6 px-6 pb-3">{title}</h1>
          <p className="text-sm pb-6 px-6">{description}</p>
          {artifacts.map((artifact, index) => (
            <Link
              key={index}
              href={`/${parentPage}/${artifact
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className={`w-[100%] h-[7%] flex items-center pl-8 justify-between artifact-navigation-box ${
                currentArtifact.toLowerCase() === artifact.toLowerCase()
                  ? "bg-alt text-main"
                  : "bg-main text-alt"
              }`}
            >
              {artifact}
              <p className="text-sm pr-8 text-right">-&gt;</p>
            </Link>
          ))}
          <div className="w-1/2 flex flex-col items-start ml-4 pt-8">
            <p className="mb-2">Theme Select:</p>
            <div className="flex">
              <ThemeToggle />
              <div className="flex flex-col justify-between h-[110px] ml-2">
                <span className="text-sm italic">Dark</span>
                <span className="text-sm italic">Time</span>
                <span className="text-sm italic">Light</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] container-box overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default ArtifactLayout;
