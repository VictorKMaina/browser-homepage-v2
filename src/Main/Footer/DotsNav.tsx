import Dot from "./Dot";
import styles from "./footer.module.scss";

function DotsNav() {
  return (
    <nav className={styles["dots-nav"]}>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </nav>
  );
}

export default DotsNav;
