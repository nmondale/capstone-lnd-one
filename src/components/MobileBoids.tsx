"use client";

import React, { useRef, useEffect } from "react";
import p5 from "p5";
import { Boid } from "./Boid";

const MobileBoids: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let p5Instance: p5;
    let flock: Boid[] = [];

    const sketch = (p: p5) => {
      const margin = 20;

      p.setup = () => {
        const container = canvasRef.current;
        if (!container) return;
        
        // Use a fixed height for mobile, or container height if larger
        const containerWidth = container.offsetWidth || p.windowWidth;
        const containerHeight = Math.max(300, container.offsetHeight || 300);
        
        const canvas = p.createCanvas(containerWidth, containerHeight);
        canvas.parent(canvasRef.current!);
        
        const titles = [
          "Signage",
          "Thrown-Aside",
          "AudioVisual",
          "Im-Here",
          "PoetryText",
        ];
        
        for (let i = 0; i < 5; i++) {
          const boid = new Boid(p, margin, titles[i]);
          boid.position.x = p.random(p.width * 0.5, p.width);
          boid.position.y = p.random(margin, p.height - margin);
          flock.push(boid);
        }
      };

      p.draw = () => {
        let mainColor = "#ffffff";
        let altColor = "#000000";

        if (typeof window !== "undefined") {
          const root = document.documentElement;
          mainColor = getComputedStyle(root)
            .getPropertyValue("--main-color")
            .trim();
          altColor = getComputedStyle(root)
            .getPropertyValue("--alt-color")
            .trim();
        }

        p.background(mainColor);

        for (const boid of flock) {
          boid.edges();
          boid.flock(flock);
          // Pass dummy mouse coordinates far away to disable mouse interaction
          boid.update(-10000, -10000);
          boid.show(p, altColor);
        }
      };

      p.windowResized = () => {
        const container = canvasRef.current;
        if (!container) return;
        
        const containerWidth = container.offsetWidth || p.windowWidth;
        const containerHeight = Math.max(300, container.offsetHeight || 300);
        p.resizeCanvas(containerWidth, containerHeight);
      };
    };

    p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="w-full h-full"
      style={{ minHeight: "300px" }}
    />
  );
};

export default MobileBoids;

