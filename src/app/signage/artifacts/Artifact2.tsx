import React from "react";
import styles from "../styles/signagestyles.module.css";
import RatFukSVG from "../../../assets/icons/ratfuk.svg";

const Artifact2: React.FC = () => {
  return (
    <div className={styles.signageContainer}>
      <div className={styles.sign} style={{ width: "337px", height: "179px" }}>
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
            <div className={styles.ratFukTextBack}>You are Officially on</div>
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
  );
};

export default Artifact2;
