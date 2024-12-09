"use client";

import React from "react";
import { useParams } from "next/navigation";
import ArtifactLayout from "../../../components/ArtifactLayout";
import Artifact1 from "../artifacts/Artifact1";
import Artifact2 from "../artifacts/Artifact2";
import Artifact3 from "../artifacts/Artifact3";
import Artifact4 from "../artifacts/Artifact4";

const artifacts = ["Artifact 1", "Artifact 2", "Artifact 3", "Artifact 4"];

const ArtifactPage: React.FC = () => {
  const params = useParams();
  const artifactParam = params.artifact as string;
  const currentArtifact = artifactParam.replace(/-/g, " ");

  const getArtifactComponent = () => {
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
      title="Poetry Text"
      description="The PoetryText artifact collection houses works of poetic web. The artifacts act as discrete poetic renderings of the current state of the Lock and Dam 1, the broader processes of speculative design, and the philosophical implications of damming."
      parentPage="poetrytext"
      artifacts={artifacts}
      currentArtifact={currentArtifact}
    >
      {getArtifactComponent()}
    </ArtifactLayout>
  );
};

export default ArtifactPage;
