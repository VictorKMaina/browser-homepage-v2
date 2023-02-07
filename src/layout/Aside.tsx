import styles from "@styles/modules/Aside.module.scss";
import Button from "@components/Button";
import { useAside } from "@/contexts/Aside.context";
import { useReducer } from "react";
import { asidePageReducer } from "@/utility/asidePageReducer";
import SavedImages from "./SavedImages";
import { ImagesProvider } from "@/contexts/Images.context";

const Aside = () => {
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

      <ImagesProvider>
        {page === "saved_images" && <SavedImages />}
      </ImagesProvider>
    </aside>
  );
};

export default Aside;
