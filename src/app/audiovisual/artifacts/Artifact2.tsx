import React from "react";
import Image from "next/image";
import { imageUrls } from "../../../utils/imageUrls";
import { useAudio } from "../../../hooks/useAudio";
import { audioUrls } from "../../../utils/audioUrls";

// Style constants
const BORDER_STYLES = {
  regular: "border-b border-alt",
};

interface ImageContainerProps {
  src: string;
  alt: string;
  overlayImageSrc: string;
  overlayImageAlt: string;
  borderStyle?: string;
  audioUrl: string;
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

const Artifact2: React.FC = () => {
  const images = [
    {
      src: imageUrls.audiovisual.artifact21.url,
      alt: imageUrls.audiovisual.artifact21.alt,
      overlaySrc: imageUrls.audiovisual.artifact21overlay.url,
      overlayAlt: imageUrls.audiovisual.artifact21overlay.alt,
    },
    {
      src: imageUrls.audiovisual.artifact22.url,
      alt: imageUrls.audiovisual.artifact22.alt,
      overlaySrc: imageUrls.audiovisual.artifact22overlay.url,
      overlayAlt: imageUrls.audiovisual.artifact22overlay.alt,
    },
    {
      src: imageUrls.audiovisual.artifact23.url,
      alt: imageUrls.audiovisual.artifact23.alt,
      overlaySrc: imageUrls.audiovisual.artifact23overlay.url,
      overlayAlt: imageUrls.audiovisual.artifact23overlay.alt,
    },
  ];

  return (
    <div className="h-screen">
      <div className="grid grid-rows-3 h-full">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <ImageContainer
              src={image.src}
              alt={image.alt}
              overlayImageSrc={image.overlaySrc}
              overlayImageAlt={image.overlayAlt}
              audioUrl={
                audioUrls.audiovisual[
                  `artifact2${index + 1}` as keyof typeof audioUrls.audiovisual
                ]
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artifact2;
