import Greeting from "@components/Greeting";
import Location from "@components/Location";
import styles from "@styles/modules/Header.module.scss";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <Greeting />
      <Location />
    </header>
  );
}
