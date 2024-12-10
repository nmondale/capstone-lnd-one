import React, { useState } from "react";
import styles from "../styles/signagestyles.module.css";
import ProhibitedSVG from "../../../assets/icons/prohibited.svg";
import { imageUrls } from "../../../utils/imageUrls";
import ImageModal from "../components/ImageModal";

const Artifact3: React.FC = () => {
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
            style={{ width: "193px", height: "289px" }}
          >
            <div className={`${styles.signFace}`}>
              <div className={styles.noticeSign}>
                <div className={styles.noticeHeader}> NOTICE </div>
                <ProhibitedSVG
                  style={{
                    fill: "var(--alt-color)",
                    width: "150px",
                    height: "auto",
                  }}
                />
                <div className={styles.noticeText}>NO FLOW PAST THIS POINT</div>
              </div>
            </div>
            <div className={`${styles.signFace} ${styles.back}`}>
              <div className={`${styles.noticeSign} ${styles.noticeSignBack}`}>
                <div
                  className={`${styles.noticeHeader} ${styles.noticeHeaderBack}`}
                >
                  NOTICE
                </div>
                <ProhibitedSVG
                  style={{
                    fill: "var(--main-color)",
                    width: "150px",
                    height: "auto",
                  }}
                />
                <div
                  className={`${styles.noticeText} ${styles.noticeTextBack}`}
                >
                  NO FLOW PAST THIS POINT
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className={styles.prose}>
          <p className="text-sm">
            The Dam infrastructure exerts precise and total control over the
            flow of the Mississippi using the concrete dam structure, allowing
            some water to pass, and forcing some water to remain in its place.
            Beyond this physical barrier however, there are many other more
            conceptual barriers to entry, where User-Agents are made to leave
            parts of their identity behind, while allowing others through.
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
                    url: imageUrls.signage.noflow[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.noflow
                    ].url,
                    alt: imageUrls.signage.noflow[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.noflow
                    ].alt,
                  })
                }
              >
                <img
                  src={
                    imageUrls.signage.noflow[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.noflow
                    ].url
                  }
                  alt={
                    imageUrls.signage.noflow[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.noflow
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

export default Artifact3;
