import styles from "@styles/modules/SavedImages.module.scss";
import Button from "@/components/Button";
import { Thumbnail } from "@/components/Thumbnail";
import { useImages } from "@/contexts/Images.context";

export default function SavedImages() {
  const [images, setImages] = useImages();

  function handleSelect(thumbnailID: string) {
    setImages((prev) => {
      return prev.map((image) => {
        if (image.id === thumbnailID) {
          return { ...image, selected: !image.selected };
        }
        return image;
      });
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setImages((prev) => prev.filter((image) => !image.selected));
  }

  function handleReset() {
    setImages((prev) =>
      prev.map((image) => {
        return { ...image, selected: false };
      })
    );
  }

  return (
    <form
      className={styles["saved-images"]}
      onReset={handleReset}
      onSubmit={handleSubmit}
    >
      <header>
        <h2>Saved images</h2>
        <p>
          {`${images.length} images`}
        </p>
        <div className={styles.actions}>
          <Button
            type="submit"
            icon="material-symbols:delete-rounded"
            classes={[styles["delete-button"]]}
          >
            Delete image
          </Button>
          <Button type="reset">Cancel</Button>
        </div>
      </header>

      <div className={styles["images"]}>
        {images.map((image) => (
          <Thumbnail
            key={image.id}
            id={image.id}
            imageUrl={image.imageUrl}
            description={image.description}
            selected={image.selected}
            selectThumbnail={handleSelect}
          />
        ))}
      </div>
    </form>
  );
}
