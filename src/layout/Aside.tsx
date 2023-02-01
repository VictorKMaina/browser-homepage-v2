import ImageForm from "./ImageForm";
import SavedImages from "./SavedImages";
import styles from "@styles/modules/Aside.module.scss";
import Button from "@components/Button";

interface AsideProps {
  onAsideToggle: () => void;
}

export default function Aside({ onAsideToggle }: AsideProps) {
  return (
    <aside className={styles["aside"]}>
      <Button onClick={onAsideToggle} icon="material-symbols:close">
        Close
      </Button>
      <ImageForm />
      <SavedImages />
    </aside>
  );
}
