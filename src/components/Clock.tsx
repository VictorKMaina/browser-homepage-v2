import styles from "@styles/modules/Clock.module.scss";
import { getCurrentTime } from "@/utility/datetime";
import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(() => getCurrentTime());
  const { hours, minutes, meridiem } = time;

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(() => getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className={styles["clock"]}>
      <div className={styles["time"]}>
        {hours}:{minutes}
      </div>
      <div className={styles["meridiem"]}>{meridiem}</div>
    </div>
  );
}

export default Clock;
