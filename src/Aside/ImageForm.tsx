import ImageStatus from "./ImageStatus";
import Input from "../shared/components/Input";
import styles from "./aside.module.scss";
import Button from "../shared/components/Button";

export default function ImageForm() {
  return (
    <form className={styles["image-form"]}>
      <ImageStatus />
      <Input
        id="imageUrl"
        name="imageUrl"
        placeholder="Enter image url"
        icon="material-symbols:link"
        value=""
      />
      <Input
        id="imageUrl"
        name="imageUrl"
        placeholder="Description"
        icon="material-symbols:text-snippet-outline"
        value=""
        textearea={true}
      />
      <footer>
        <Button>Cancel</Button>
        <Button icon='material-symbols:save' style={{ color: "var(--primary)" }}>Save image</Button>
      </footer>
    </form>
  );
}
