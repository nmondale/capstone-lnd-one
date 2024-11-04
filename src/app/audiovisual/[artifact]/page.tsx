"use client";

import React from "react";
import { useParams } from "next/navigation";
import ArtifactLayout from "../../../components/ArtifactLayout";
import Artifact1 from "../artifacts/Artifact1";
import Artifact2 from "../artifacts/Artifact2";
import dynamic from "next/dynamic";

const artifacts = ["Artifact 1", "Artifact 2", "Artifact 3", "Artifact 4"];

const ArtifactPage: React.FC = () => {
  const params = useParams();
  const artifactParam = params.artifact as string;
  const currentArtifact = artifactParam.replace(/-/g, " ");

  const getArtifactComponent = () => {
    const Component = React.useMemo(() => {
      switch (artifactParam.toLowerCase()) {
        case "artifact-1":
          return Artifact1;
        case "artifact-2":
          return Artifact2;
        case "artifact-3":
          return dynamic(() => import("../artifacts/Artifact3"));
        case "artifact-4":
          return dynamic(() => import("../artifacts/Artifact4"));
        default:
          return () => (
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">Artifact Not Found</h2>
              <p>The artifact you are looking for does not exist.</p>
            </div>
          );
      }
    }, [artifactParam]);

    return <Component />;
  };

  return (
    <ArtifactLayout
      title="AudioVisual Content"
      description="Explore the audiovisual artifacts related to Lock and Dam One/Ford Dam."
      parentPage="audiovisual"
      artifacts={artifacts}
      currentArtifact={currentArtifact}
    >
      {getArtifactComponent()}
    </ArtifactLayout>
  );
};

export default ArtifactPage;
