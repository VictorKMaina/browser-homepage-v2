import Button from "@components/Button";
import Dots from "@components/Dots";
import styles from "@styles/modules/Footer.module.scss";
import ImageDescription from "@components/ImageDescription";
import { useAside } from "@/contexts/Aside.context";

type FooterProps = { onToggleAside: () => void };

export default function Footer() {
  const [asideOpen, toggleAside] = useAside()

  return (
    <footer className={styles["footer"]}>
      <Button
        onClick={() => toggleAside()}
        icon={
          asideOpen
            ? "material-symbols:left-panel-close-rounded"
            : "material-symbols:left-panel-open-rounded"
        }
      >
        {asideOpen ? "Close" : "View Images"}
      </Button>
      <ImageDescription />
      <Dots />
    </footer>
  );
}
