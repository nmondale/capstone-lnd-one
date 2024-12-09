// src/app/signage/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import ArtifactLayout from "../../components/ArtifactLayout";
import ArtifactLoading from "../../components/ArtifactLoading";
import Artifact1 from "./artifacts/Artifact1";

const artifacts = ["Artifact 1", "Artifact 2", "Artifact 3", "Artifact 4"];

const SignagePage = () => {
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
      title="Signage"
      description={`Artifacts in the Signage collection represent the physical textual and graphic signs that claim ownership of the Lock and Dam 1 space, establishing modes of comportment within a pre established standard. Each sign embeds visual language into LD1, and uses a social vernacular that defines the ways in which User-Agents are allowed to behave or not behave. 
        \n\nWhat signs do you see on this webpage? 
        \nHow am I telling you to behave in my digital space? 
        \nHow have I claimed ownership, how have you?`}
      parentPage="signage"
      artifacts={artifacts}
      currentArtifact="Artifact 1"
    >
      {isLoading ? <ArtifactLoading /> : <Artifact1 />}
    </ArtifactLayout>
  );
};

export default SignagePage;
