import React, { useState } from "react";
import styles from "../styles/signagestyles.module.css";
import CameraIconSVG from "../../../assets/icons/camera.svg";
import { imageUrls } from "../../../utils/imageUrls";
import ImageModal from "../components/ImageModal";

const Artifact1: React.FC = () => {
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
            style={{ width: "190px", height: "282px" }}
          >
            <div className={`${styles.signFace} ${styles.front}`}>
              <div className={styles.signContent}>
                <CameraIconSVG
                  style={{
                    fill: "currentColor",
                    width: "90px",
                    height: "100px",
                  }}
                />
                <div className={styles.signText}>
                  YOU AREN&apos;T SUPPOSED TO BE HERE! GO AWAY NOW! NOW!
                </div>
              </div>
            </div>
            <div className={`${styles.signFace} ${styles.back}`}>
              <div className={styles.signContent}>
                <CameraIconSVG
                  style={{
                    fill: "currentColor",
                    width: "90px",
                    height: "100px",
                  }}
                />
                <div className={styles.signText}>
                  YOU AREN&apos;T SUPPOSED TO BE HERE! GO AWAY NOW! NOW!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="prose">
          <p className="text-sm">
            Located in Minneapolis, Lock and Dam No. 1 (also known as the Ford
            Dam) is a crucial piece of infrastructure on the Mississippi River.
            These signs document the various warnings and restrictions around
            the facility.
          </p>
        </div>

        {/* Mapbox iframe */}
        <div className="w-full">
          <iframe
            width="100%"
            height="325px"
            src="https://api.mapbox.com/styles/v1/nellymoonballs1/cm3xjhclc00dt01qq0ebi2ps3.html?title=false&access_token=pk.eyJ1IjoibmVsbHltb29uYmFsbHMxIiwiYSI6ImNtM3hpeXV6ajFneGkyanBqZTg2eXllOHcifQ.CDXjzCtv1-ETXZMMrVSsFw&zoomwheel=false#15.51/44.914237/-93.20072"
            title="Lock and Dam No. 1 Map"
            style={{
              border: "1px solid var(--alt-color)",
              borderRadius: "10px",
            }}
          />
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
                    url: imageUrls.signage.keepout[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.keepout
                    ].url,
                    alt: imageUrls.signage.keepout[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.keepout
                    ].alt,
                  })
                }
              >
                <img
                  src={
                    imageUrls.signage.keepout[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.keepout
                    ].url
                  }
                  alt={
                    imageUrls.signage.keepout[
                      `sign${
                        index + 1
                      }` as keyof typeof imageUrls.signage.keepout
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

export default Artifact1;
