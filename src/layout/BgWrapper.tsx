import styles from "@styles/modules/BgWrapper.module.scss";
import { classNames } from "@/helpers/classnames.helper";
import { useContext } from "react";
import { AsideContext } from "@/contexts/Aside.context";

export default function BgWrapper() {
  const [asideOpen, _] = useContext(AsideContext);

  return (
    <div className={styles["bg-wrapper"]}>
      <div
        className={
          asideOpen
            ? classNames(styles["bg-overlay"], styles["aside-shown"])
            : styles["bg-overlay"]
        }
      ></div>

      <img
        src="https://images.unsplash.com/photo-1673950455470-d872dcec6eb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        alt="default bg image"
      />
    </div>
  );
}
