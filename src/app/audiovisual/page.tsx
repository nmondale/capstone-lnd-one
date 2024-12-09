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
      title="AudioVisual"
      description={`The AudioVisual artifact collection uses captured audio and visual information to construct a manner of looking and listening in the Lock and Dam 1 space. The information has been captured by me from various angles, temperatures, positions, emotions, hunger levels, audiovisual capturing equipment, etc.\n\nHow do you currently look and listen to the Lock and Dam?\nHow intentional are these processes for you?\nDo you care? Why/why not?`}
      parentPage="audiovisual"
      artifacts={artifacts}
      currentArtifact="Artifact 1"
    >
      {isLoading ? <ArtifactLoading /> : <Artifact1 />}
    </ArtifactLayout>
  );
};

export default AudiovisualPage;
