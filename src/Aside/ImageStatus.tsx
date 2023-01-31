import React from "react";
import Thumbnail from "../shared/components/Thumbnail";
import styles from "./aside.module.scss";

type ImageStatusProps = { message?: string };

function ImageStatus({ message }: ImageStatusProps) {
  return (
    <div className={styles["image-status"]}>
      <Thumbnail />
      <p>{message || "Waiting for image..."}</p>
    </div>
  );
}

export default ImageStatus;
