import React from "react";
import styles from "../styles/signagestyles.module.css";

const Artifact1: React.FC = () => {
  return (
    <div className={styles.signageContainer}>
      <div className={styles.sign}>
        <div className={styles.front}>
          <div className="font-bold flex items-center justify-center border-b border-alt">
            &lt;- Return Home
          </div>
        </div>
        <div className={styles.back}>
          <div className="font-bold flex items-center justify-center border-b border-main">
            &lt;- Return Home
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artifact1;
