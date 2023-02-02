import Button from "@components/Button";
import Dots from "@components/Dots";
import styles from "@styles/modules/Footer.module.scss";
import ImageDescription from "@components/ImageDescription";

type FooterProps = { onToggleAside: () => void }

export default function Footer({ onToggleAside }: FooterProps) {
  return (
    <footer className={styles["footer"]}>
      <Button onClick={onToggleAside} icon="material-symbols:add">Add images</Button>
      <ImageDescription />
      <Dots />
    </footer>
  );
}
