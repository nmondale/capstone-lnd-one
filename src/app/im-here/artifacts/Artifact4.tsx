import React, { useState, useEffect, useCallback, useMemo } from "react";
import { imageUrls } from "../../../utils/imageUrls";

const CONFIG = {
  holes: {
    outer: { max: 500, initial: 0 },
    middle: { max: 375, initial: 0 },
    inner: { max: 250, initial: 0 },
    growthRate: 0.25,
  },
  temperature: {
    water: { min: 2.5, max: 19.75, initial: 2.5 },
    human: { min: 19.75, max: 37, initial: 37 },
  },
};

interface HoleSizes {
  outer: number;
  middle: number;
  inner: number;
}

const Artifact4: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPressed, setIsPressed] = useState(false);
  const [showPoem, setShowPoem] = useState(false);
  const [holeSizes, setHoleSizes] = useState<HoleSizes>({
    outer: CONFIG.holes.outer.initial,
    middle: CONFIG.holes.middle.initial,
    inner: CONFIG.holes.inner.initial,
  });
  const [temperatures, setTemperatures] = useState({
    water: CONFIG.temperature.water.initial,
    human: CONFIG.temperature.human.initial,
  });

  const calculateTemperatures = useCallback((sizes: HoleSizes) => {
    const outerProgress = sizes.outer / CONFIG.holes.outer.max / 3;
    const middleProgress = sizes.middle / CONFIG.holes.middle.max / 3;
    const innerProgress = sizes.inner / CONFIG.holes.inner.max / 3;
    const totalProgress = outerProgress + middleProgress + innerProgress;

    return {
      water:
        CONFIG.temperature.water.min +
        (CONFIG.temperature.water.max - CONFIG.temperature.water.min) *
          totalProgress,
      human:
        CONFIG.temperature.human.max +
        (CONFIG.temperature.human.min - CONFIG.temperature.human.max) *
          totalProgress,
    };
  }, []);

  const updateSizes = useCallback(
    (growing: boolean) => {
      setHoleSizes((prev) => {
        const newSizes = {
          outer: growing
            ? Math.min(
                prev.outer + CONFIG.holes.growthRate,
                CONFIG.holes.outer.max
              )
            : Math.max(prev.outer - CONFIG.holes.growthRate, 0),
          middle: growing
            ? Math.min(
                prev.middle + CONFIG.holes.growthRate,
                CONFIG.holes.middle.max
              )
            : Math.max(prev.middle - CONFIG.holes.growthRate, 0),
          inner: growing
            ? Math.min(
                prev.inner + CONFIG.holes.growthRate,
                CONFIG.holes.inner.max
              )
            : Math.max(prev.inner - CONFIG.holes.growthRate, 0),
        };

        const newTemps = calculateTemperatures(newSizes);
        setTemperatures(newTemps);

        return newSizes;
      });
    },
    [calculateTemperatures]
  );

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      updateSizes(isPressed);

      if (
        holeSizes.outer > 0 ||
        holeSizes.middle > 0 ||
        holeSizes.inner > 0 ||
        isPressed
      ) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPressed, holeSizes, updateSizes]);

  useEffect(() => {
    const convergencePoint = 19.75;
    const threshold = 0.1; // Allow small difference due to floating point

    if (
      Math.abs(temperatures.water - convergencePoint) < threshold &&
      Math.abs(temperatures.human - convergencePoint) < threshold
    ) {
      setShowPoem(true);
    } else {
      setShowPoem(false);
    }
  }, [temperatures]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isPressed) return;
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [isPressed]
  );

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsPressed(true);
  }, []);

  const clipPaths = useMemo(
    () => ({
      outer: `circle(${holeSizes.outer}px at ${mousePos.x}px ${mousePos.y}px)`,
      middle: `circle(${holeSizes.middle}px at ${mousePos.x}px ${mousePos.y}px)`,
      inner: `circle(${holeSizes.inner}px at ${mousePos.x}px ${mousePos.y}px)`,
    }),
    [holeSizes, mousePos]
  );

  const temperaturePositions = useMemo(
    () => ({
      human:
        130 -
        (((temperatures.human - CONFIG.temperature.human.min) /
          (CONFIG.temperature.human.max - CONFIG.temperature.human.min)) *
          40 +
          80),
      water:
        ((temperatures.water - CONFIG.temperature.water.max) /
          (CONFIG.temperature.water.min - CONFIG.temperature.water.max)) *
          40 +
        50,
    }),
    [temperatures]
  );

  return (
    <div
      className="relative w-full h-screen cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <div className="absolute inset-0">
        <img
          src={imageUrls.imHere.artifact41.url}
          alt={imageUrls.imHere.artifact41.alt}
          className="w-full h-full object-cover"
        />
      </div>

      {[
        { clipPath: clipPaths.outer, image: imageUrls.imHere.artifact42 },
        { clipPath: clipPaths.middle, image: imageUrls.imHere.artifact43 },
        { clipPath: clipPaths.inner, image: imageUrls.imHere.artifact44 },
      ].map((layer, index) => (
        <div
          key={index}
          className="absolute inset-0"
          style={{
            clipPath: layer.clipPath,
            WebkitClipPath: layer.clipPath,
            transform: "translate3d(0,0,0)",
          }}
        >
          <img
            src={layer.image.url}
            alt={layer.image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute bottom-8 left-8 w-24 h-[70%] border border-alt rounded-xl flex flex-col overflow-hidden">
        <div
          className="absolute w-full border-t border-alt bg-main"
          style={{
            bottom: "0",
            top: `${temperaturePositions.water}%`,
            transform: "translate3d(0,0,0)",
          }}
        >
          <span className="absolute text-center bottom-3 whitespace-nowrap text-sm leading-5 ml-3">
            <strong>Water</strong> <br /> {temperatures.water.toFixed(1)}°C
          </span>
        </div>

        <div
          className="absolute w-full border-b border-alt bg-main"
          style={{
            bottom: `calc(100% - ${temperaturePositions.human}%)`,
            top: "0",
            transform: "translate3d(0,0,0)",
          }}
        >
          <span className="absolute top-3 ml-3 whitespace-nowrap text-sm leading-5">
            <strong>You</strong> <br /> {temperatures.human.toFixed(1)}°C
          </span>
        </div>
      </div>

      {showPoem && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-main p-12 rounded-xl">
            <div className="max-w-4xl w-full grid grid-cols-2 relative">
              {/* Column 1 */}
              <div className="flex flex-col space-y-4">
                <h2 className="text-2xl italic font-bold mb-4">
                  I have a self <br /> that spans...
                </h2>
                <p> - Up ↑, Down ↓, Left ←, and Right →</p>
                <p> - North ↗, South ↘, West ↖, and East ↘</p>
                <p> - Inward ↘, and Outward ↗</p>
                <p> - Black, and White</p>
                <p> - Blue, Red, Pink, and Yellow</p>
                <p> - Liquid, and Solid</p>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col space-y-4">
                <p> - True, and False</p>
                <p>- Alive and Dead</p>
                <p>- Asleep and Awake</p>
                <p>- Down the Mississippi River, to the Gulf</p>
                <p>
                  - The Length of my Body <br />
                  (toes, calves, knees, thighs, hips, pelvis, belly, <br />{" "}
                  torso, shoulders, neck, head, and crown)
                </p>
                <p>- A Dazzlyingly Bright Darkness</p>
                <p>- A Deep, Heavy Lightness</p>
                <p>- Genius and Fool</p>
                <p>- Past and Future</p>
                <p>- Now.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artifact4;
