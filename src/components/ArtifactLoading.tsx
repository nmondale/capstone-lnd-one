"use client";

import React from "react";

interface ArtifactLoadingProps {
  progress?: number;
}

const ArtifactLoading: React.FC<ArtifactLoadingProps> = ({ progress }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px] space-y-4">
      <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-alt transition-all duration-300 ease-out"
          style={{ width: `${progress || 0}%` }}
        />
      </div>
      <div className="text-lg">
        Loading Artifact... {progress ? `${Math.round(progress)}%` : ""}
      </div>
    </div>
  );
};

export default ArtifactLoading;
