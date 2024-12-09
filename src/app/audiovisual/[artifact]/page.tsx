"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ArtifactLayout from "../../../components/ArtifactLayout";
import ArtifactLoading from "../../../components/ArtifactLoading";
import Artifact1 from "../artifacts/Artifact1";
import Artifact2 from "../artifacts/Artifact2";
import dynamic from "next/dynamic";

const artifacts = ["Artifact 1", "Artifact 2", "Artifact 3", "Artifact 4"];

const ArtifactPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const artifactParam = params.artifact as string;
  const currentArtifact = artifactParam.replace(/-/g, " ");

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [artifactParam]);

  return (
    <ArtifactLayout
      title="AudioVisual"
      description={`The AudioVisual artifact collection uses captured audio and visual information to construct a manner of looking and listening in the Lock and Dam 1 space. The information has been captured by me from various angles, temperatures, positions, emotions, hunger levels, audiovisual capturing equipment, etc.\n\nHow do you currently look and listen to the Lock and Dam?\nHow intentional are these processes for you?\nDo you care? Why/why not?`}
      parentPage="audiovisual"
      artifacts={artifacts}
      currentArtifact={currentArtifact}
    >
      {isLoading ? <ArtifactLoading /> : <Component />}
    </ArtifactLayout>
  );
};

export default ArtifactPage;
