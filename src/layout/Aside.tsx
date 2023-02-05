import styles from "@styles/modules/Aside.module.scss";
import Button from "@components/Button";
import { useAside } from "@/contexts/Aside.context";

export default function Aside() {
  const [_, toggleAside] = useAside();

  return (
    <aside className={styles["aside"]}>
      {/* <nav>
        <Button icon="material-symbols:add-box-rounded">Add image</Button>
        <Button
          onClick={() => toggleAside()}
          icon="material-symbols:left-panel-close-rounded"
        >
          Close
        </Button>
      </nav>
      <header>Header</header>

      <section>saved images</section>

      <form>Image form</form> */}
    </aside>
  );
}
