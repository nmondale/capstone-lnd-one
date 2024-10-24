// src/app/poetrytext/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import ArtifactLayout from "../../components/ArtifactLayout";
import Artifact1 from "./artifacts/Artifact1";

const artifacts = ["Artifact 1", "Artifact 2", "Artifact 3", "Artifact 4"];

const PoetryTextPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading indicator
  }
  return (
    <ArtifactLayout
      title="Poetry Text"
      description="Explore the artifacts related to Lock and Dam One/Ford Dam."
      parentPage="poetrytext"
      artifacts={artifacts}
      currentArtifact="Artifact 1"
    >
      <Artifact1 />
    </ArtifactLayout>
  );
};

export default PoetryTextPage;
