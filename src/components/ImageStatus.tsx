import React from "react";
import Thumbnail from "@components/Thumbnail";
import styles from "@styles/modules/ImageStatus.module.scss";

type ImageStatusProps = { message?: string };

function ImageStatus({ message }: ImageStatusProps) {
  return (
    <div className={styles["image-status"]}>
      <Thumbnail image={null}/>
      <p>{message || "Waiting for image..."}</p>
    </div>
  );
}

export default ImageStatus;
