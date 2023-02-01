import Thumbnail from "@components/Thumbnail";
import styles from "@styles/modules/SavedImages.module.scss";

export default function SavedImages() {
  return (
    <section className={styles["saved-images"]}>
      <h2>Saved images</h2>
      <p>Your saved images will appear here.</p>
      
      <div className={styles["thumbnails-wrapper"]}>
        {/* <Thumbnail image="s" /> */}
      </div>
    </section>
  );
}
