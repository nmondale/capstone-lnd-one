import React from "react";
import styles from "../styles/signagestyles.module.css";
import WaterDropSVG from "../../../assets/icons/waterdrop.svg";

const Artifact4: React.FC = () => {
  return (
    <div className={styles.signageContainer}>
      <div className={styles.sign} style={{ width: "233px", height: "287px" }}>
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
              <div className={`${styles.learnText} ${styles.learnTextBack}`}>
                Laern <br /> &nbsp; &nbsp; &nbsp; More!!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artifact4;
