import styles from "./center.module.scss";

function Clock() {
  return (
    <div className={styles["clock"]}>
        <div className={styles["time"]}>09:45</div>
        <div className={styles["meridiem"]}>PM</div>
    </div>
  );
}

export default Clock;
