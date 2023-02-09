import { Icon } from "@iconify-icon/react";
import styles from "@styles/modules/Arrows.module.scss";
import { useBackgroundContext } from "@/contexts/Background.context";

export default function Arrows() {
  const { nextIndex, prevIndex } = useBackgroundContext()

  return (
    <div className={styles["arrows"]}>
      <Icon
        onClick={prevIndex}
        icon="material-symbols:arrow-circle-left-rounded"
      />
      <Icon
        onClick={nextIndex}
        icon="material-symbols:arrow-circle-right-rounded"
      />
    </div>
  );
}
