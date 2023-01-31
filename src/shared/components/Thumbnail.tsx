import styles from "./thumbnail.module.scss";
import { Icon } from "@iconify-icon/react";
import Button from "./Button";

function ThumbnailBlank() {
  return (
    <div className={styles["thumbnail-blank"]}>
      <Icon icon="material-symbols:image-rounded" />
    </div>
  );
}

type ThumbnailImageProps = { image: any };
function ThumbnailImage({ image }: ThumbnailImageProps) {
  let defaultUrl =
    "https://images.unsplash.com/photo-1674824959440-09442ed75a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80";

  return (
    <div className={styles["thumbnail-image"]}>
      <div className={styles["thumbnail-button"]}>
        <Button icon="material-symbols:delete"></Button>
      </div>
      <img src={image.url || defaultUrl} alt="" />
    </div>
  );
}

type ThumbnailProps = { image: any };
export default function Thumbnail({ image }: ThumbnailProps) {
  return (
    <div className={styles["thumbnail-outer"]}>
      <div className={styles["thumbnail-inner"]}>
        {image ? <ThumbnailImage image={image} /> : <ThumbnailBlank />}
      </div>
    </div>
  );
}
