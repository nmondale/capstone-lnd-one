// src/app/audiovisual/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import ArtifactLayout from "../../components/ArtifactLayout";
import ArtifactLoading from "../../components/ArtifactLoading";
import Artifact1 from "./artifacts/Artifact1";

const artifacts = ["Artifact 1", "Artifact 2", "Artifact 3", "Artifact 4"];

const AudiovisualPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <ArtifactLayout
      title="AudioVisual Content"
      description="Explore the audiovisual artifacts related to Lock and Dam One/Ford Dam."
      parentPage="audiovisual"
      artifacts={artifacts}
      currentArtifact="Artifact 1"
    >
      {isLoading ? <ArtifactLoading /> : <Artifact1 />}
    </ArtifactLayout>
  );
};

export default AudiovisualPage;
