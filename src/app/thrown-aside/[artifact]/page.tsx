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
      title="Thrown Aside"
      description="The vast majority of User-Agents in expressing their hopes for a better Lock and Dam describe a cleaner river, a river free of toxicity and pollution. The Thrown Aside artifact collection asks you to consider this pollution on an intimate level, and to think of what it means to throw something aside, to render something a pollutant."
      parentPage="thrown-aside"
      artifacts={artifacts}
      currentArtifact={currentArtifact}
    >
      {getArtifactComponent()}
    </ArtifactLayout>
  );
};

export default ArtifactPage;
