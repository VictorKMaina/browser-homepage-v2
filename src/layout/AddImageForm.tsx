import { Icon } from "@iconify-icon/react";
import styles from "@styles/modules/AddImageForm.module.scss";
import Input from "@components/Input";
import { useState } from "react";
import Button from "@/components/Button";
import { useImages } from "@/contexts/Images.context";
import { ImageError } from "@/models/Image/ImageErrors.class";

type AddImageFormProps = {};

export default function AddImageForm({}: AddImageFormProps) {
  const { createImage } = useImages();
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [urlErrors, setUrlErrors] = useState<ImageError>();

  function handleUrlChange(e: React.ChangeEvent) {
    setUrl((e.target as HTMLInputElement).value);
  }

  function handleDescriptionChange(e: React.ChangeEvent) {
    setDescription((e.target as HTMLInputElement).value);
  }

  function handleReset() {
    setUrl("");
    setDescription("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      createImage(url, description);
    } catch (err) {
      setUrlErrors(err as ImageError);
    }
  }

  return (
    <section className={styles["add-image-form-wrapper"]}>
      <header>
        <h2>Add image</h2>
      </header>
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        autoComplete="off"
        className={styles["add-image-form"]}
      >
        <ImageStatus />
        {urlErrors && (
          <div className={styles["errors"]}>{urlErrors.message}</div>
        )}
        <Input
          htmlName="url"
          placeholder="Enter image url"
          htmlID="url"
          value={url}
          onChange={handleUrlChange}
          icon="material-symbols:link-rounded"
        />
        <Input
          htmlName="description"
          placeholder="Description"
          htmlID="description"
          value={description}
          onChange={handleDescriptionChange}
          icon="material-symbols:text-snippet-outline-rounded"
        />
        <div className={styles.actions}>
          <Button type="reset">Cancel</Button>
          <Button type="submit" icon="material-symbols:save-rounded">
            Save image
          </Button>
        </div>
      </form>
    </section>
  );
}

function ImageStatus({}) {
  return (
    <div className={styles["image-status"]}>
      <Icon icon="material-symbols:image" />
      <span>Waiting for image...</span>
    </div>
  );
}
