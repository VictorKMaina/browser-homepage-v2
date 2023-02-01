import styles from "@styles/modules/Clock.module.scss";
import CurrentTime from "@/models/DateTime/CurrentTime.class";
import { useState, useEffect } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(() => new CurrentTime())
  const { hours, minutes, meridiem } = currentTime;

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(() => new CurrentTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTime]);

  return (
    <div className={styles["clock"]}>
      <div className={styles["time"]}>
        {hours.string}:{minutes.string}
      </div>
      <div className={styles["meridiem"]}>{meridiem}</div>
    </div>
  );
}

export default Clock;
