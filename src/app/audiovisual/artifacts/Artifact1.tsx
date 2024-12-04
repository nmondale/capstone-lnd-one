import React from "react";
import Image from "next/image";
import { imageUrls } from "@/utils/imageUrls";
import { useAudio } from "@/hooks/useAudio";
import { audioUrls } from "@/utils/audioUrls";

// Style constants
const BORDER_STYLES = {
  regular: "border-r border-t border-alt",
  split: "border-r border-alt",
};

interface ImageContainerProps {
  src: string;
  alt: string;
  overlayImageSrc: string;
  overlayImageAlt: string;
  borderStyle?: string;
  audioUrl: string;
}

interface SplitImageContainerProps {
  leftSrc: string;
  rightSrc: string;
  leftAlt: string;
  rightAlt: string;
  leftOverlaySrc: string;
  rightOverlaySrc: string;
  leftOverlayAlt: string;
  rightOverlayAlt: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  alt,
  overlayImageSrc,
  overlayImageAlt,
  borderStyle = BORDER_STYLES.regular,
  audioUrl,
}) => {
  const { play, pause } = useAudio(audioUrl);

  return (
    <div
      className={`relative w-full h-full group overflow-hidden ${borderStyle}`}
      onMouseEnter={play}
      onMouseLeave={pause}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        loading="lazy"
      />
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-0">
        <Image
          src={overlayImageSrc}
          alt={overlayImageAlt}
          fill
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>
    </div>
  );
};

const SplitImageContainer: React.FC<SplitImageContainerProps> = ({
  leftSrc,
  rightSrc,
  leftAlt,
  rightAlt,
  leftOverlaySrc,
  rightOverlaySrc,
  leftOverlayAlt,
  rightOverlayAlt,
}) => {
  return (
    <div className="relative w-full h-full flex flex-row">
      <ImageContainer
        src={leftSrc}
        alt={leftAlt}
        overlayImageSrc={leftOverlaySrc}
        overlayImageAlt={leftOverlayAlt}
        borderStyle={BORDER_STYLES.split}
        audioUrl={
          audioUrls.audiovisual.artifact11 as keyof typeof audioUrls.audiovisual
        }
      />
      <ImageContainer
        src={rightSrc}
        alt={rightAlt}
        overlayImageSrc={rightOverlaySrc}
        overlayImageAlt={rightOverlayAlt}
        borderStyle={BORDER_STYLES.split}
        audioUrl={
          audioUrls.audiovisual.artifact12 as keyof typeof audioUrls.audiovisual
        }
      />
    </div>
  );
};

const Artifact1: React.FC = () => {
  const images = {
    split: {
      left: {
        src: imageUrls.audiovisual.artifact11.url,
        alt: imageUrls.audiovisual.artifact11.alt,
        overlaySrc: imageUrls.audiovisual.artifact11overlay.url,
        overlayAlt: imageUrls.audiovisual.artifact11overlay.alt,
      },
      right: {
        src: imageUrls.audiovisual.artifact12.url,
        alt: imageUrls.audiovisual.artifact12.alt,
        overlaySrc: imageUrls.audiovisual.artifact12overlay.url,
        overlayAlt: imageUrls.audiovisual.artifact12overlay.alt,
      },
    },
    regular: [
      {
        src: imageUrls.audiovisual.artifact13.url,
        alt: imageUrls.audiovisual.artifact13.alt,
        overlaySrc: imageUrls.audiovisual.artifact13overlay.url,
        overlayAlt: imageUrls.audiovisual.artifact13overlay.alt,
      },
      {
        src: imageUrls.audiovisual.artifact14.url,
        alt: imageUrls.audiovisual.artifact14.alt,
        overlaySrc: imageUrls.audiovisual.artifact14overlay.url,
        overlayAlt: imageUrls.audiovisual.artifact14overlay.alt,
      },
      {
        src: imageUrls.audiovisual.artifact15.url,
        alt: imageUrls.audiovisual.artifact15.alt,
        overlaySrc: imageUrls.audiovisual.artifact15overlay.url,
        overlayAlt: imageUrls.audiovisual.artifact15overlay.alt,
      },
    ],
  };

  const maskColors = {
    topLeft: "#FFE4E1",
    topRight: "#E6E6FA",
    bottomLeft: "#F0FFF0",
    bottomRight: "#F5F5DC",
  };

  return (
    <div className="h-screen">
      <div className="grid grid-cols-2 grid-rows-2 h-full">
        <SplitImageContainer
          leftSrc={images.split.left.src}
          rightSrc={images.split.right.src}
          leftAlt={images.split.left.alt}
          rightAlt={images.split.right.alt}
          leftOverlaySrc={images.split.left.overlaySrc}
          rightOverlaySrc={images.split.right.overlaySrc}
          leftOverlayAlt={images.split.left.overlayAlt}
          rightOverlayAlt={images.split.right.overlayAlt}
        />
        {images.regular.map((image, index) => (
          <div key={index} className="w-full h-full">
            <ImageContainer
              src={image.src}
              alt={image.alt}
              overlayImageSrc={image.overlaySrc}
              overlayImageAlt={image.overlayAlt}
              audioUrl={
                audioUrls.audiovisual[
                  `artifact1${index + 3}` as keyof typeof audioUrls.audiovisual
                ]
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artifact1;
