import CurrentDate from "@/models/DateTime/CurrentDate.class";
import { Icon } from "@iconify-icon/react";
import styles from "@styles/modules/Greeting.module.scss";
import { useState, useEffect } from "react";

function Greeting() {
  const [currentDate, setCurrentDate] = useState(() => new CurrentDate());
  const { day, date, month, year } = currentDate;

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setCurrentDate(() => new CurrentDate());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentDate]);

  return (
    <div className={styles["greeting-outer"]}>
      <Icon icon={"ph:sun-duotone"} />
      <div className={styles["greeting-inner"]}>
        <p>Good morning</p>
        <time>
          {day.long}, {date.string} {month.long}, {year.string}
        </time>
      </div>
    </div>
  );
}

export default Greeting;
