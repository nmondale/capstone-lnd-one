"use client";

import React, { useState, useEffect, lazy, Suspense } from "react";
import { imageUrls } from "../../../utils/imageUrls";

const Artifact1: React.FC = () => {
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const magnifierHeight = 200;
  const magnifierWidth = 500;
  const zoomLevel = 9;

  const imageUrl = imageUrls.imHere.artifact1.url;

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
          src={imageUrl}
          alt={imageUrls.imHere.artifact1.alt}
          loading="lazy"
          onLoad={() => setIsImageLoaded(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            maxHeight: "100vh",
            cursor: "none",
            opacity: isImageLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            if (!isImageLoaded) return;
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
          }}
          onMouseLeave={() => {
            setShowMagnifier(false);
          }}
          onMouseMove={(e) => {
            if (!isImageLoaded) return;
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();
            const x = e.pageX - left - window.scrollX;
            const y = e.pageY - top - window.scrollY;
            setXY([x, y]);
          }}
        />

        {showMagnifier && isImageLoaded && (
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
              backgroundImage: `url(${imageUrl})`,
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
