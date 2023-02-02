import Thumbnail from "@components/Thumbnail";
import styles from "@styles/modules/SavedImages.module.scss";
import { useState } from "react";

export default function SavedImages() {
  const [imageCollection, setImageCollection] = useState([1, 2, 3]);

  return (
    <section className={styles["saved-images"]}>
      <h2>Saved images</h2>
      {imageCollection.length === 0 && <p>Your saved images will appear here.</p>}

      <div className={styles["thumbnails-wrapper"]}>
        {imageCollection.map(image => <Thumbnail key={image} image={image} />)}
      </div>
    </section>
  );
}
