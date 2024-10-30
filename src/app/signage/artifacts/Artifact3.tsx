import React from "react";
import styles from "../styles/signagestyles.module.css";
import ProhibitedSVG from "../../../assets/icons/prohibited.svg";

const Artifact3: React.FC = () => {
  return (
    <div className={styles.signageContainer}>
      <div className={styles.sign} style={{ width: "193px", height: "289px" }}>
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
            <div className={`${styles.noticeText} ${styles.noticeTextBack}`}>
              NO FLOW PAST THIS POINT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artifact3;
