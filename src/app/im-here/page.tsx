// src/app/im-here/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import ArtifactLayout from "../../components/ArtifactLayout";
import Artifact1 from "./artifacts/Artifact1";

const artifacts = ["Artifact 1", "Artifact 2", "Artifact 3", "Artifact 4"];

const ImHerePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading indicator
  }
  return (
    <ArtifactLayout
      title="I'm Here"
      description="Artifacts in the I’m Here collection reinforce the subjectivity of knowing and telling. At the center of every aspect of this project is me! I do not claim to possess the ability to tell the fullness of the Lock and Dam 1 story, and nor do I agree such a thing is possible. This project does exist as a refraction of my understanding of a portion of that story, curated and collected for you, the new owner of a different story, a different understanding."
      parentPage="im-here"
      artifacts={artifacts}
      currentArtifact="Artifact 1"
    >
      <Artifact1 />
    </ArtifactLayout>
  );
};

export default ImHerePage;
