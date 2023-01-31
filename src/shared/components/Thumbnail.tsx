import styles from "./thumbnail.module.scss";

export default function Thumbnail() {
  return (
    <div className={styles["thumbnail-wrapper"]}>
      <div className={styles["thumbnail"]}></div>
    </div>
  );
}
