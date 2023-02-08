import styles from "@styles/modules/SavedImages.module.scss";
import Button from "@/components/Button";
import { Thumbnail } from "@/components/Thumbnail";
import { useImages } from "@/contexts/Images.context";
import { useReducer, useCallback } from "react";
import { Image, SelectedImage } from "@/models/Image/Image.interface";
import selectedImagesReducer from "@/utility/selectedImagesReducer";
import { pluralize } from "@/helpers/pluralize.helper";

export default function SavedImages() {
  const [images] = useImages();

  const [selectedImages, handleSelectedImages] = useReducer(
    selectedImagesReducer,
    images,
    createSelectedImages
  );

  const amountSelected = useCallback(() => {
    return selectedImages.reduce((num, currentImage) => {
      if (currentImage.selected) num++;
      return num;
    }, 0);
  }, [selectedImages]);

  function handleSelect(thumbnailID: string) {
    handleSelectedImages({ type: "select", id: thumbnailID });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleSelectedImages({ type: "delete" });
  }

  function handleReset() {
    handleSelectedImages({ type: "reset" });
  }

  return (
    <form
      className={styles["saved-images"]}
      onReset={handleReset}
      onSubmit={handleSubmit}
    >
      <Header
        amountSelected={amountSelected()}
        totalAmount={selectedImages.length}
      />
      <div className={styles["images"]}>
        {selectedImages.map((image) => (
          <Thumbnail
            key={image.id}
            id={image.id}
            imageUrl={image.imageUrl}
            description={image.description}
            selected={image.selected}
            selectThumbnail={handleSelect}
          />
        ))}

        {selectedImages.length === 0 && (
          <p>Your saved images will appear here.</p>
        )}
      </div>
    </form>
  );
}

function createSelectedImages(images: Image[]) {
  return images.map((image): SelectedImage => ({ ...image, selected: false }));
}

type HeaderProps = { amountSelected: number; totalAmount: number };
function Header({ amountSelected, totalAmount }: HeaderProps) {
  return (
    <header>
      <h2>Saved images</h2>
      {amountSelected > 0 ? (
        <p>{`${amountSelected} of ${totalAmount} selected`}</p>
      ) : (
        <p>{`${totalAmount} ${pluralize("image", totalAmount)}`}</p>
      )}

      {amountSelected > 0 && (
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
      )}
    </header>
  );
}
