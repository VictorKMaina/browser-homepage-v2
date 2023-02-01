import Button from "../../shared/components/Button";
import DotsNav from "./DotsNav";
import styles from "./footer.module.scss";
import Description from "./Description";

type FooterProps = { onAsideToggle: () => void }

export default function Footer({ onAsideToggle }: FooterProps) {
  return (
    <footer className={styles["footer"]}>
      <Button onClick={onAsideToggle} icon="material-symbols:add">Add images</Button>
      <Description />
      <DotsNav />
    </footer>
  );
}
