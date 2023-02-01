import Clock from "@components/Clock";
import SearchBar from "@components/SearchBar";
import styles from "@styles/modules/Midsection.module.scss";

export default function MidSection() {
  return (
    <article className={styles['center']}>
      <Clock />
      <SearchBar />
    </article>
  );
}
