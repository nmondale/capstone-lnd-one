import React from "react";
import LockingDiagramSVG from "../../../assets/icons/lockingdiagram.svg";

const Artifact2: React.FC = () => {
  return (
    <div className="flex flex-row items-start justify-center min-h-screen p-8 gap-8">
      <div className="w-1/2">
        <LockingDiagramSVG
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Lock and Dam Diagram</h2>
        <p className="text-sm mb-4">
          This diagram illustrates the basic components and operation of Lock
          and Dam 1. The structure enables river navigation by creating a
          controlled water level system.
        </p>
      </div>
    </div>
  );
};

export default Artifact2;
