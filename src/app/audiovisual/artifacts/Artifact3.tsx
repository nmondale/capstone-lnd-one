import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { imageUrls } from "@/utils/imageUrls";
import { useAudio } from "@/hooks/useAudio";
import { audioUrls } from "@/utils/audioUrls";

const sceneInfo = [
  {
    id: 1,
    label: "No Trespassing, 9:35PM",
    images: {
      main: imageUrls.audiovisual.artifact31,
      alt: imageUrls.audiovisual.artifact32,
    },
    audio: audioUrls.audiovisual.artifact33,
  },
  {
    id: 2,
    label: "Ice Forms on the River Bank, 11:07PM",
    images: {
      main: imageUrls.audiovisual.artifact33,
      alt: imageUrls.audiovisual.artifact34,
    },
    audio: audioUrls.audiovisual.artifact32,
  },
  {
    id: 3,
    label: "Ford Scenic Overlook, 11:42PM",
    images: {
      main: imageUrls.audiovisual.artifact35,
      alt: imageUrls.audiovisual.artifact36,
    },
    audio: audioUrls.audiovisual.artifact31,
  },
];

const Artifact3: React.FC = () => {
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const [selectedScene, setSelectedScene] = useState(1);

  // Add loop parameter to useAudio hook
  const audio = useAudio(sceneInfo[selectedScene - 1].audio, true);

  // Memoize current scene data
  const currentScene = useMemo(
    () => sceneInfo[selectedScene - 1],
    [selectedScene]
  );

  // Memoize keyboard event handlers
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.code === "Space" && !e.repeat) {
      e.preventDefault();
      setIsSpacePressed(true);
    }
  }, []);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (e.code === "Space") {
      e.preventDefault();
      setIsSpacePressed(false);
    }
  }, []);

  // Handle keyboard events
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  // Handle audio playback
  useEffect(() => {
    audio.play();
    return () => audio.pause();
  }, [selectedScene, audio]);

  return (
    <div className="relative w-full h-screen">
      <Image
        src={
          isSpacePressed
            ? currentScene.images.alt.url
            : currentScene.images.main.url
        }
        alt={
          isSpacePressed
            ? currentScene.images.alt.alt
            : currentScene.images.main.alt
        }
        fill
        className="object-cover"
        priority
      />

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 flex gap-4">
        {sceneInfo.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setSelectedScene(id)}
            className={`
              px-4 py-2 rounded-full border border-brightest
              flex items-center justify-center
              transition-colors duration-200 whitespace-nowrap
              ${
                selectedScene === id
                  ? "bg-brightest text-darkest"
                  : "bg-primary/20 text-brightest"
              }
            `}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div
          className={`
            rounded-xl px-48 py-3 border border-brightest
            transition-colors duration-200
            ${
              isSpacePressed
                ? "bg-brightest text-darkest"
                : "bg-primary/20 text-brightest"
            }
          `}
        >
          <span className="font-medium">hold space: flashlight</span>
        </div>
      </div>
    </div>
  );
};

export default Artifact3;
