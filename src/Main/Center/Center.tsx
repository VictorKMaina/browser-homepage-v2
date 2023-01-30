import Clock from "./Clock";
import SearchBar from "./SearchBar";
import styles from "./center.module.scss";

export default function Center() {
  return (
    <article className={styles['center']}>
      <Clock />
      <SearchBar />
    </article>
  );
}
