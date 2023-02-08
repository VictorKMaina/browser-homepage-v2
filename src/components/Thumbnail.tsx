import styles from "@styles/modules/Thumbnail.module.scss";
import { classNames } from "@/helpers/classnames.helper";
import { Image } from "@/models/Image/Image.interface";
import { memo } from "react";
import Checkbox from "./Checkbox";

export interface ThumbnailInterface extends Image {
  selected: boolean;
  selectThumbnail: (thumbnailID: string) => void;
}

export const Thumbnail = memo(
  ({
    id,
    description,
    imageUrl,
    selected,
    selectThumbnail,
  }: ThumbnailInterface) => {
    function handleCheckThumbnail() {
      selectThumbnail(id);
    }

    const classes = classNames(
      styles["thumbnail"],
      selected && styles["checked"]
    );

    return (
      <div onClick={handleCheckThumbnail} className={classes}>
        <div className={styles["checkbox-wrapper"]}>
          <Checkbox
            id={id}
            onChange={handleCheckThumbnail}
            checked={selected}
          />
        </div>
        <div className={styles["description"]}>{description}</div>
        <div className={styles["image-wrapper"]}>
          <img src={imageUrl} alt="" />
        </div>
      </div>
    );
  },
  (prev, next) => prev.id === next.id && prev.selected === next.selected
);
