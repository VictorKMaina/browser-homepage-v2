import styles from "@styles/modules/Aside.module.scss";
import Button from "@components/Button";
import { useAside } from "@/contexts/Aside.context";
import { useReducer, useState } from "react";
import { asidePageReducer } from "@/utility/asidePageReducer";
import { Thumbnail, ThumbnailInterface } from "@/components/Thumbnail";
import { Image } from "@/models/BgImage/Image.class";
import SavedImages from "./SavedImages"

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

      {page === "saved_images" && <SavedImages />}
    </aside>
  );
};

export default Aside;
