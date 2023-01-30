import Greeting from "./Greeting";
import Location from "./Location";
import styles from "./header.module.scss"

export default function Header() {
  return <header className={styles['header']}>
    <Greeting />
    <Location />
  </header>;
}
