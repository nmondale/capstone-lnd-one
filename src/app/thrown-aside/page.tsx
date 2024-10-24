// src/app/thrown-aside/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import ArtifactLayout from "../../components/ArtifactLayout";
import Artifact1 from "./artifacts/Artifact1";

const artifacts = ["Artifact 1", "Artifact 2", "Artifact 3", "Artifact 4"];

const ThrownAsidePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading indicator
  }
  return (
    <ArtifactLayout
      title="Thrown Aside"
      description="Explore the artifacts related to Lock and Dam One/Ford Dam."
      parentPage="thrown-aside"
      artifacts={artifacts}
      currentArtifact="Artifact 1"
    >
      <Artifact1 />
    </ArtifactLayout>
  );
};

export default ThrownAsidePage;
