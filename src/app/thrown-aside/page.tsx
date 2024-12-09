// src/app/thrown-aside/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import ArtifactLayout from "../../components/ArtifactLayout";
import ArtifactLoading from "../../components/ArtifactLoading";
import Artifact1 from "./artifacts/Artifact1";

const artifacts = ["Artifact 1", "Artifact 2", "Artifact 3", "Artifact 4"];

const ThrownAsidePage = () => {
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
      title="Thrown Aside"
      description="The vast majority of User-Agents in expressing their hopes for a better Lock and Dam describe a cleaner river, a river free of toxicity and pollution. The Thrown Aside artifact collection asks you to consider this pollution on an intimate level, and to think of what it means to throw something aside, to render something a pollutant."
      parentPage="thrown-aside"
      artifacts={artifacts}
      currentArtifact="Artifact 1"
    >
      {isLoading ? <ArtifactLoading /> : <Artifact1 />}
    </ArtifactLayout>
  );
};

export default ThrownAsidePage;
