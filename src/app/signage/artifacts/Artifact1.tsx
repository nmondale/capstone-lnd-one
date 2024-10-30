import React from "react";
import styles from "../styles/signagestyles.module.css";
import CameraIconSVG from "../../../assets/icons/camera.svg";

const Artifact1: React.FC = () => {
  return (
    <div className={styles.signageContainer}>
      <div className={styles.sign} style={{ width: "190px", height: "282px" }}>
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
  );
};

export default Artifact1;
