import React, { useState } from "react";
import styles from "../styles/signagestyles.module.css";
import WaterDropSVG from "../../../assets/icons/waterdrop.svg";
import { imageUrls } from "../../../utils/imageUrls";
import ImageModal from "../components/ImageModal";

const Artifact4: React.FC = () => {
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
            style={{ width: "233px", height: "287px" }}
          >
            <div className={`${styles.signFace}`}>
              <div className={styles.learnSign}>
                <div className={styles.pinDot}></div>
                <div className={styles.pinDot}></div>
                <div className={styles.learnContent}>
                  <WaterDropSVG
                    style={{
                      fill: "var(--alt-color)",
                      width: "200px",
                      height: "auto",
                      position: "absolute",
                    }}
                  />
                  <div className={styles.learnText}>
                    Laern <br /> &nbsp; &nbsp; &nbsp; More!!
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.signFace} ${styles.back}`}>
              <div className={`${styles.learnSign} ${styles.learnSignBack}`}>
                <div className={`${styles.pinDot} ${styles.pinDotBack}`}></div>
                <div className={`${styles.pinDot} ${styles.pinDotBack}`}></div>
                <div className={styles.learnContent}>
                  <WaterDropSVG
                    style={{
                      fill: "var(--main-color)",
                      width: "200px",
                      height: "auto",
                      position: "absolute",
                    }}
                  />
                  <div
                    className={`${styles.learnText} ${styles.learnTextBack}`}
                  >
                    Laern <br /> &nbsp; &nbsp; &nbsp; More!!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className={styles.prose}>
          <p className="text-sm">
            LD1 is littered with official USACE informational signage, packed
            with dense text that describes different facets of the Lock and Dam
            space, much like this website. Signs describe things like river
            ecology, the story of building the dam, the impact of dams on the
            Mississippi waterways, and stories of “another time”, where
            indigenous people used the LD1 space for canoeing and migration.
            Countless of these signs feature mistakes, where words may be
            written twice, punctuation marks forgotten, or representations of
            false histories that do not accurately reflect the lived experience
            of User-Agents.
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
                    url: imageUrls.signage.learnmore[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.learnmore
                    ].url,
                    alt: imageUrls.signage.learnmore[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.learnmore
                    ].alt,
                  })
                }
              >
                <img
                  src={
                    imageUrls.signage.learnmore[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.learnmore
                    ].url
                  }
                  alt={
                    imageUrls.signage.learnmore[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.learnmore
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

export default Artifact4;
