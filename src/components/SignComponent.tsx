// src/components/SignComponent.tsx
import React from "react";
import styles from "../app/signage/styles/signagestyles.module.css";

interface SignProps {
  width?: string;
  height?: string;
  children: React.ReactNode;
  signType: string;
}

const SignComponent: React.FC<SignProps> = ({
  width,
  height,
  children,
  signType,
}) => {
  return (
    <div className={styles.signageContainer}>
      <div className={`${styles[`${signType}sign`]}`} style={{ width, height }}>
        <div className={styles.front}>{children}</div>
        <div className={styles.back}>{children}</div>
      </div>
    </div>
  );
};

export default SignComponent;
