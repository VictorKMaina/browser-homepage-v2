import styles from "@styles/modules/Aside.module.scss";
import Button from "@components/Button";
import { useAside } from "@/contexts/Aside.context";
import { useReducer } from "react";
import { asidePageReducer } from "@/utility/asidePageReducer";
import SavedImages from "./SavedImages";
import { ImagesProvider } from "@/contexts/Images.context";
import AddImageForm from "./AddImageForm";

const Aside = () => {
  const [, toggleAside] = useAside();
  const [page, handleChangePage] = useReducer(asidePageReducer, "saved_images");

  return (
    <aside className={styles["aside"]}>
      <nav>
        {page !== "image_form" ? (
          <Button
            onClick={() => handleChangePage({ type: "image_form" })}
            icon="material-symbols:add-box-rounded"
          >
            Add image
          </Button>
        ) : (
          <Button
            onClick={() => handleChangePage({ type: "saved_images" })}
            icon="material-symbols:chevron-left-rounded"
          >
            Saved images
          </Button>
        )}

        <Button
          onClick={() => toggleAside()}
          icon="material-symbols:left-panel-close-rounded"
        >
          Close
        </Button>
      </nav>

      <ImagesProvider>
        {page === "saved_images" && <SavedImages />}
        {page === "image_form" && <AddImageForm />}
      </ImagesProvider>
    </aside>
  );
};

export default Aside;
