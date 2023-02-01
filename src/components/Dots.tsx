import styles from "@styles/modules/Dots.module.scss";

function Dot() {
  return (
    <div className={styles['dot-inactive']}></div>
  )
}

export default function Dots() {
  return (
    <nav className={styles["dots-nav"]}>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </nav>
  );
}
