"use client";

import React from "react";
import { useTimeContext } from "../hooks/useTimeContext";
import MobileBoids from "./MobileBoids";
import "../app/styles/homepage-styles.css";

const MobileOverlay: React.FC = () => {
  const timeContext = useTimeContext();

  if (!timeContext) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-alt z-[50] pointer-events-auto md:hidden overflow-y-auto p-0 m-0">
      <div className="min-h-screen flex flex-col">
        {/* Top Container Box */}
        <div className="container-box w-full flex flex-col p-8">
          <h1 className="text-xl mb-4">
            Seeing Yourself in Your Structure:{" "}
            <p className="font-bold">Lock and Dam One/Ford Dam</p>
          </h1>

          <p className="mb-6">
            Seeing Yourself in Your Structure uses Lock and Dam 1 (LD1) as a
            lens to examine how built infrastructure shapes social, cultural,
            and ideological understandings of river space. Drawing parallels
            between physical spaces like LD1 and digital platforms, the project
            leverages speculative design to challenge traditional planning
            practices, fostering critical reflection and imagining more
            inclusive, equitable urban river spaces. It aims to provide the
            tools and perspectives needed to rethink how both water and
            knowledge flow in a post-digital world.
          </p>

          <p>
            <i>
              {" "}
              Seeing Yourself in Your Structure was created with larger devices
              in mind, and is not yet optimized for use on smaller devices. At
              this time,{" "}
              <strong>please use a tablet, laptop, or desktop</strong> to view
              the project! Thank you!
            </i>
          </p>
        </div>

        {/* Bottom Container Box with Boids */}
        <div
          className="container-box w-full flex flex-col overflow-hidden flex-1"
          style={{ minHeight: "300px" }}
        >
          <MobileBoids />
        </div>
      </div>
    </div>
  );
};

export default MobileOverlay;
