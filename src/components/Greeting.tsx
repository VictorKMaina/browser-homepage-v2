import { Icon } from "@iconify-icon/react";
import styles from "@styles/modules/Greeting.module.scss";

function Greeting() {
  return <div className={styles['greeting-outer']}>
    <Icon icon={'ph:sun-duotone'} />
    <div className={styles["greeting-inner"]}>
      <p>Good morning</p>
      <time>Sunday, 29 January, 2023</time>
    </div>
  </div>;
}

export default Greeting;
