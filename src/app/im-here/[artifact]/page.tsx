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
    // Simulate loading time or wait for resources
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
      title="Im Here"
      description="Artifacts in the I’m Here collection reinforce the subjectivity of knowing and telling. At the center of every aspect of this project is me! I do not claim to possess the ability to tell the fullness of the Lock and Dam 1 story, and nor do I agree such a thing is possible. This project does exist as a refraction of my understanding of a portion of that story, curated and collected for you, the new owner of a different story, a different understanding."
      parentPage="im-here"
      artifacts={artifacts}
      currentArtifact={currentArtifact}
    >
      {getArtifactComponent()}
    </ArtifactLayout>
  );
};

export default ArtifactPage;
