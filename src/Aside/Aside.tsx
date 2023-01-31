import ImageForm from "./ImageForm";
import SavedImages from "./SavedImages";
import styles from "./aside.module.scss";

export default function Aside() {
  return (
    <aside className={styles["aside-hidden"]}>
      <div className={styles["aside-inner"]}>
        <ImageForm />
        <SavedImages />
      </div>
    </aside>
  );
}
