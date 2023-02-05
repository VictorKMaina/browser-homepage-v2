import styles from "@styles/modules/Aside.module.scss";
import Button from "@components/Button";
import { useAside } from "@/contexts/Aside.context";
import { useReducer } from "react";
import { asidePageReducer } from "@/utility/asidePageReducer";

export default function Aside() {
  const [_, toggleAside] = useAside();
  const [page, dispatchPage] = useReducer(asidePageReducer, "saved_images");

  return (
    <aside className={styles["aside"]}>
      <nav>
        <Button icon="material-symbols:add-box-rounded">Add image</Button>
        <Button
          onClick={() => toggleAside()}
          icon="material-symbols:left-panel-close-rounded"
        >
          Close
        </Button>
      </nav>

      {page === "saved_images" && <SavedImages />}
    </aside>
  );
}

function SavedImages() {
  return (
    <section className={styles["saved-images"]}>
      <header>
        <h2>Saved images</h2>
        <p>1 of 2 selected</p>
      </header>
      <div className={styles.actions}>
        <Button
          icon="material-symbols:delete-rounded"
          classes={[styles["delete-button"]]}
        >
          Delete image
        </Button>
        <Button>Cancel</Button>
      </div>
    </section>
  );
}
