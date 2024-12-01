"use client";

import React from "react";

interface ArtifactLoadingProps {
  progress?: number;
}

const ArtifactLoading: React.FC<ArtifactLoadingProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px] space-y-4">
      <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-alt transition-all duration-300 ease-out" />
      </div>
      <div className="text-lg">Loading Artifact...</div>
    </div>
  );
};

export default ArtifactLoading;
