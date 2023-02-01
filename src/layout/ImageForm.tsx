import ImageStatus from "../components/ImageStatus";
import Input from "@components/Input";
import styles from "@styles/modules/ImageForm.module.scss";
import Button from "@components/Button";
import { useState } from "react";

export default function ImageForm() {
  const [urlVal, setUrlVal] = useState("");
  const [descriptionVal, setDescriptionVal] = useState("");

  function updateUrlVal(e: React.ChangeEvent) {
    const newUrlVal = (e.target as HTMLInputElement).value;
    setUrlVal(newUrlVal);
  }

  function updateDescriptionVal(e: React.ChangeEvent) {
    const newUrlVal = (e.target as HTMLInputElement).value;
    setDescriptionVal(newUrlVal);
  }

  function clearForm(): void {
    setUrlVal("");
    setDescriptionVal("");
  }

  function handleReset(e: React.ChangeEvent<HTMLFormElement>) {
    clearForm()
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      autoComplete="off"
      onReset={handleReset}
      onSubmit={handleSubmit}
      className={styles["image-form"]}
    >
      <ImageStatus />
      <Input
        onChange={updateUrlVal}
        id="imageUrl"
        name="imageUrl"
        placeholder="Enter image url"
        icon="material-symbols:link"
        value={urlVal}
      />
      <Input
        onChange={updateDescriptionVal}
        id="description"
        name="description"
        placeholder="Description"
        icon="material-symbols:text-snippet-outline"
        value={descriptionVal}
        textearea={true}
      />
      <footer>
        <Button type="reset">Cancel</Button>
        <Button
          type="submit"
          icon="material-symbols:save"
          style={{ color: "var(--primary)" }}
        >
          Save image
        </Button>
      </footer>
    </form>
  );
}
