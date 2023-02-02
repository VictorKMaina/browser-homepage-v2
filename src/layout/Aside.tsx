import ImageForm from "./ImageForm";
import SavedImages from "./SavedImages";
import styles from "@styles/modules/Aside.module.scss";
import Button from "@components/Button";

interface AsideProps {
  onToggleAside: () => void;
}

export default function Aside({ onToggleAside }: AsideProps) {
  return (
    <aside className={styles["aside"]}>
      <SavedImages />
      {/* <ImageForm /> */}
    </aside>
  );
}
