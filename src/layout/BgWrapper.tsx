import styles from "@styles/modules/BgWrapper.module.scss";
import { classNames } from "@/helpers/classnames.helper";
import { useAside } from "@/contexts/Aside.context";
import { useImages } from "@/contexts/Images.context";
import { useCallback, useEffect, useMemo } from "react";

export default function BgWrapper() {
  const [asideOpen, _] = useAside();
  const { images } = useImages();

  useEffect(() => {
    console.log("Images has changed", images)
    return;
  }, [images]);

  return (
    <div className={styles["bg-wrapper"]}>
      <div
        className={
          asideOpen
            ? classNames(styles["bg-overlay"], styles["aside-shown"])
            : styles["bg-overlay"]
        }
      ></div>

      {images.length > 0 && (
        <img src={images[0].imageUrl} alt={images[0].description} />
      )}
    </div>
  );
}
