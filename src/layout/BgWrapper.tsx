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
        src="https://images.unsplash.com/photo-1673940308551-65b7fe1c2226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        alt="default bg image"
      />
    </div>
  );
}
