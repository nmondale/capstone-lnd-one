import React, { useState } from "react";
import styles from "../styles/signagestyles.module.css";
import RatFukSVG from "../../../assets/icons/ratfuk.svg";
import { imageUrls } from "../../../utils/imageUrls";
import ImageModal from "../components/ImageModal";

const Artifact2: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    alt: string;
  } | null>(null);

  return (
    <div className="flex h-screen">
      {/* Left Column - 1/3 width */}
      <div className="w-1/3 border-r border-alt p-4 flex flex-col gap-6 overflow-y-auto">
        {/* Spinning Sign */}
        <div
          className={styles.signageContainer}
          style={{ height: "300px", paddingTop: "10px" }}
        >
          <div
            className={styles.sign}
            style={{ width: "337px", height: "179px" }}
          >
            <div className={`${styles.signFace} ${styles.ratFukFront}`}>
              <div className={styles.ratFukInner}>
                <div className={styles.ratFukText}>You are Officially on</div>
                <RatFukSVG
                  style={{
                    fill: "currentColor",
                    width: "250px",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className={`${styles.signFace} ${styles.ratFukBack}`}>
              <div className={styles.ratFukInnerBack}>
                <div className={styles.ratFukTextBack}>
                  You are Officially on
                </div>
                <RatFukSVG
                  style={{
                    fill: "currentColor",
                    width: "250px",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className={styles.prose}>
          <p className="text-sm">
            There is graffiti on many surfaces around the Lock and Dam 1 space.
            Some of these surfaces are natural, such as rocks, or wood, some
            city infrastructure, like bridges, signs, and informational
            pavilions. Some graffiti were created on government property, with
            etchings into garbage cans and thick black lines on fence posts.
            Most of the graffiti placed onto government property remains only in
            frail remnants, having been forcefully removed. Graffiti welcomes
            alternative modes of understanding, recoding city infrastructure as
            a canvas, introducing an environment of artistic reflection and
            reconsiderations of notions of space.
          </p>
        </div>
      </div>

      {/* Right Column - 2/3 width */}
      <div className="w-2/3">
        <div className="grid grid-cols-2 grid-rows-4 h-full">
          {[...Array(8)].map((_, index) => (
            <figure key={index} className="relative h-full">
              <div
                className="overflow-hidden border-b border-r border-alt h-full cursor-pointer"
                onClick={() =>
                  setSelectedImage({
                    url: imageUrls.signage.ratfuk[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.ratfuk
                    ].url,
                    alt: imageUrls.signage.ratfuk[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.ratfuk
                    ].alt,
                  })
                }
              >
                <img
                  src={
                    imageUrls.signage.ratfuk[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.ratfuk
                    ].url
                  }
                  alt={
                    imageUrls.signage.ratfuk[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.ratfuk
                    ].alt
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>

      <ImageModal
        imageUrl={selectedImage?.url || ""}
        altText={selectedImage?.alt || ""}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default Artifact2;
