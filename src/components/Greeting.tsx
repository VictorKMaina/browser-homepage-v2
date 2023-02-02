import CurrentDate from "@/models/DateTime/CurrentDate.class";
import CurrentTime from "@/models/DateTime/CurrentTime.class";
import { Icon } from "@iconify-icon/react";
import styles from "@styles/modules/Greeting.module.scss";
import { useState, useEffect } from "react";
import { formatGreeting } from "@/helpers/formatGreeting.helper";

function IconDay() {
  return (
    <div className={styles["icon-day"]}>
      <Icon icon={"ph:sun-duotone"} />
    </div>
  );
}

function IconNight() {
  return (
    <div className={styles["icon-night"]}>
      <Icon icon={"ph:moon-stars-duotone"} />
    </div>
  );
}

function Greeting() {
  const [currentDate, setCurrentDate] = useState(() => new CurrentDate());
  const [period, setPeriod] = useState(() => new CurrentTime().period);
  const { day, date, month, year } = currentDate;

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setCurrentDate(() => new CurrentDate());
      setPeriod(() => new CurrentTime().period);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentDate]);

  return (
    <div className={styles["greeting-outer"]}>
      {period === "night" ? <IconNight /> : <IconDay />}
      <div className={styles["greeting-inner"]}>
        <p>{formatGreeting(period)}</p>
        <time>
          {day.long}, {date.string} {month.long}, {year.string}
        </time>
      </div>
    </div>
  );
}

export default Greeting;
