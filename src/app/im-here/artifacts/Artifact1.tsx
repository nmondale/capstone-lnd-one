"use client";

import React, { useState } from "react";

const Artifact1: React.FC = () => {
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const magnifierHeight = 200;
  const magnifierWidth = 500;
  const zoomLevel = 9;

  return (
    <div className="relative">
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
        }}
      >
        <img
          src="/images/im-here/artifact1.png"
          alt="Artifact 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            maxHeight: "100vh",
            cursor: "none",
          }}
          onMouseEnter={(e) => {
            // Get image size
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
          }}
          onMouseLeave={() => {
            setShowMagnifier(false);
          }}
          onMouseMove={(e) => {
            // Calculate cursor position
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();
            const x = e.pageX - left - window.scrollX;
            const y = e.pageY - top - window.scrollY;
            setXY([x, y]);
          }}
        />

        {showMagnifier && (
          <div
            style={{
              display: showMagnifier ? "" : "none",
              position: "absolute",
              pointerEvents: "none",
              height: `${magnifierHeight}px`,
              width: `${magnifierWidth}px`,
              top: `${y - magnifierHeight / 2}px`,
              left: `${x - magnifierWidth / 2}px`,
              opacity: "1",
              border: "2px solid var(--alt-color)",
              backgroundColor: "white",
              backgroundImage: `url('/images/im-here/artifact1.png')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${imgWidth * zoomLevel}px ${
                imgHeight * zoomLevel
              }px`,
              backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
              backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
              borderRadius: "50%",
              cursor: "none",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Artifact1;
