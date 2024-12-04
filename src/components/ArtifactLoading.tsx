"use client";

import React from "react";

interface ArtifactLoadingProps {
  progress?: number;
}

const ArtifactLoading: React.FC<ArtifactLoadingProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px]">
      <div className="text-lg">Loading Artifact...</div>
    </div>
  );
};

export default ArtifactLoading;
