import React, { useRef, useEffect, useState, useCallback } from "react";
import p5 from "p5";
import { useTimeContext } from "../hooks/useTimeContext";
import { Boid } from "./Boid";
import HoverBox from "./HoverBox";
import { useRouter } from "next/navigation";

const FishNavigation: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const { colorScheme, currentTheme } = useTimeContext();
  const [hoveredFish, setHoveredFish] = useState<Boid | null>(null);
  const [hoverBoxPosition, setHoverBoxPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (hoveredFish) {
      router.push(`/${hoveredFish.title.toLowerCase().replace(/\s+/g, "-")}`);
    }
  }, [hoveredFish, router]);

  useEffect(() => {
    if (!canvasRef.current) return;

    let p5Instance: p5;
    let flock: Boid[] = [];

    const sketch = (p: p5) => {
      const margin = 40;

      p.setup = () => {
        const canvas = p.createCanvas(
          p.windowWidth * 0.76,
          p.windowHeight * 0.65
        );
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
        let mainColor = "#ffffff"; // Default color
        let altColor = "#000000"; // Default color

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
        let newHoveredFish: Boid | null = null;

        for (const boid of flock) {
          boid.edges();
          boid.flock(flock);
          boid.update(p.mouseX, p.mouseY);
          boid.show(p, altColor);

          if (boid.isHovered(p.mouseX, p.mouseY)) {
            newHoveredFish = boid;
          }
        }

        setHoveredFish(newHoveredFish);
        setHoverBoxPosition(
          newHoveredFish ? { x: p.mouseX, y: p.mouseY } : null
        );
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth * 0.76, p.windowHeight * 0.65);
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
      className={`w-full h-full relative ${
        currentTheme === "dark" ? "text-white" : "text-black"
      }`}
      style={{ cursor: hoveredFish ? "pointer" : "default" }}
      onClick={handleClick}
    >
      {hoveredFish && hoverBoxPosition && (
        <HoverBox
          title={hoveredFish.title}
          x={hoverBoxPosition.x}
          y={hoverBoxPosition.y}
        />
      )}
    </div>
  );
};

export default FishNavigation;
