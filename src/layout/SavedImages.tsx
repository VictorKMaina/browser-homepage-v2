import styles from "@styles/modules/SavedImages.module.scss";
import Button from "@/components/Button";
import { Thumbnail } from "@/components/Thumbnail";
import React, { useState } from "react";
import { Image } from "@/models/BgImage/Image.class";

type isSelected = { selected: boolean };

export default function SavedImages() {
  const [images, setImages] = useState<(Image & isSelected)[]>(() =>
    imagesTest.map((image) => {
      return { ...image, selected: false };
    })
  );

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
    setImages(prev => prev.filter((image) => !image.selected))
  }

  function handleReset() {
    setImages((prev) =>
      prev.map((image) => {
        return { ...image, selected: false };
      })
    );
  }

  return (
    <form className={styles["saved-images"]} onReset={handleReset} onSubmit={handleSubmit}>
      <header>
        <h2>Saved images</h2>
        <p>1 of 2 selected</p>
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

const imagesTest: Image[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1532795077981-fc1c26555bd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    description: "Bloodmoon from Switzerland",
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    description: "Saturn as seen from the Cassini–Huygens space-research mission",
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    description: "Neptune as seen from Voyager 2 from 4.4 million miles",
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    description: "View of the Earth as seen by the Apollo 17 crew traveling toward the moon",
  },
];
