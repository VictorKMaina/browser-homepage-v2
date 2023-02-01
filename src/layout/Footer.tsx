import Button from "@components/Button";
import Dots from "@components/Dots";
import styles from "@styles/modules/Footer.module.scss";
import ImageDescription from "@components/ImageDescription";

type FooterProps = { onAsideToggle: () => void }

export default function Footer({ onAsideToggle }: FooterProps) {
  return (
    <footer className={styles["footer"]}>
      <Button onClick={onAsideToggle} icon="material-symbols:add">Add images</Button>
      <ImageDescription />
      <Dots />
    </footer>
  );
}
