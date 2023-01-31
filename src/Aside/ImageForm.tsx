import ImageStatus from "./ImageStatus";
import Input from "../shared/components/Input";
import styles from "./aside.module.scss";
import Button from "../shared/components/Button";

export default function ImageForm() {
  function handleUrlOnChange() {}
  function handleDescriptionOnChange() {}

  return (
    <form className={styles["image-form"]}>
      <ImageStatus />
      <Input
        onChange={handleUrlOnChange}
        id="imageUrl"
        name="imageUrl"
        placeholder="Enter image url"
        icon="material-symbols:link"
        value=""
      />
      <Input
        onChange={handleDescriptionOnChange}
        id="imageUrl"
        name="imageUrl"
        placeholder="Description"
        icon="material-symbols:text-snippet-outline"
        value=""
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
