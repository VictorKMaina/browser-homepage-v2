import { useBackgroundContext } from "@/contexts/Background.context";
import styles from "@styles/modules/ImageDescription.module.scss";

export default function ImageDescription() {
  const { currentImage } = useBackgroundContext();

  return (
    <>
      {/* <div className={styles["description"]}>{currentImage.description}</div> */}
      { currentImage?.description && <div className={styles["description"]}>{currentImage.description}</div> }
    </>
  );
}
