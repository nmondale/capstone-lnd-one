"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ArtifactLayout from "../../../components/ArtifactLayout";
import ArtifactLoading from "../../../components/ArtifactLoading";
import Artifact1 from "../artifacts/Artifact1";
import Artifact2 from "../artifacts/Artifact2";
import Artifact3 from "../artifacts/Artifact3";
import Artifact4 from "../artifacts/Artifact4";

const artifacts = ["Artifact 1", "Artifact 2", "Artifact 3", "Artifact 4"];

const ArtifactPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const artifactParam = params.artifact as string;
  const currentArtifact = artifactParam.replace(/-/g, " ");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [artifactParam]);

  const getArtifactComponent = () => {
    if (isLoading) {
      return <ArtifactLoading />;
    }

    switch (artifactParam.toLowerCase()) {
      case "artifact-1":
        return <Artifact1 />;
      case "artifact-2":
        return <Artifact2 />;
      case "artifact-3":
        return <Artifact3 />;
      case "artifact-4":
        return <Artifact4 />;
      default:
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Artifact Not Found</h2>
            <p>The artifact you are looking for does not exist.</p>
          </div>
        );
    }
  };

  return (
    <ArtifactLayout
      title="Signage"
      description={`Artifacts in the Signage collection represent the physical textual and graphic signs that claim ownership of the Lock and Dam 1 space, establishing modes of comportment within a pre established standard. Each sign embeds visual language into LD1, and uses a social vernacular that defines the ways in which User-Agents are allowed to behave or not behave. 
\n\nWhat signs do you see on this webpage? 
\nHow am I telling you to behave in my digital space? 
\nHow have I claimed ownership, how have you?`}
      parentPage="signage"
      artifacts={artifacts}
      currentArtifact={currentArtifact}
    >
      {getArtifactComponent()}
    </ArtifactLayout>
  );
};

export default ArtifactPage;
