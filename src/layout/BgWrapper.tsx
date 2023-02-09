import styles from "@styles/modules/BgWrapper.module.scss";
import { classNames } from "@/helpers/classnames.helper";
import { useAside } from "@/contexts/Aside.context";
import { useBackgroundContext } from "@/contexts/Background.context";

export default function BgWrapper() {
  const [asideOpen, _] = useAside();
  const { currentImage, currentIndex } = useBackgroundContext();

  return (
    <div className={styles["bg-wrapper"]}>
      <div
        className={
          asideOpen
            ? classNames(styles["bg-overlay"], styles["aside-shown"])
            : styles["bg-overlay"]
        }
      ></div>

      {currentImage && (
        <img src={currentImage.imageUrl} alt={currentImage.description} />
      )}
    </div>
  );
}
