import Button from "../../shared/components/Button";
import DotsNav from "./DotsNav";
import styles from "./footer.module.scss";
import Description from "./Description";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <Button icon="material-symbols:add">Add images</Button>
      <Description />
      <DotsNav />
    </footer>
  );
}
