import styles from "@styles/modules/BgWrapper.module.scss";
import { classNames } from "@/helpers/classnames.helper";
import { useAside } from "@/contexts/Aside.context";
import { useContext } from "react";
import { BackgroundContext } from "@/contexts/Background.context";
import { useImagesStore } from "@/contexts/Images.context";

export default function BgWrapper() {
  const [asideOpen, _] = useAside();
  const { images } = useImagesStore();
  const [currentIndex, setCurrentIndex] = useContext(BackgroundContext);

  return (
    <div className={styles["bg-wrapper"]}>
      <div
        className={
          asideOpen
            ? classNames(styles["bg-overlay"], styles["aside-shown"])
            : styles["bg-overlay"]
        }
      ></div>

      {/* <h1>{currentIndex}</h1> */}

      {images.length > 0 && (
        <img
          src={images[currentIndex].imageUrl}
          alt={images[currentIndex].description}
        />
      )}
    </div>
  );
}
