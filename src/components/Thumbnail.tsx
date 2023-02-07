import styles from "@styles/modules/Thumbnail.module.scss";
import { classNames } from "@/helpers/classnames.helper";
import ImageInterface from "@/models/BgImage/Image.interface";
import { memo } from "react";

export interface ThumbnailInterface extends ImageInterface {
  selected: boolean;
  selectThumbnail: (thumbnailID: string) => void;
}

export const Thumbnail = memo(
  ({ id, selected, selectThumbnail }: ThumbnailInterface) => {
    function handleCheckThumbnail() {
      selectThumbnail(id);
    }

    const classes = classNames(
      styles["thumbnail"],
      selected && styles["checked"]
    );

    return (
      <div onClick={handleCheckThumbnail} className={classes}>
        <Radio id={id} onChange={handleCheckThumbnail} checked={selected} />
      </div>
    );
  },
  (prev, next) => prev.id === next.id && prev.selected === next.selected
);

type RadioProps = {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Radio({ id, onChange, checked }: RadioProps) {
  const classes = classNames(styles["checkbox"], checked && styles["checked"]);
  return (
    <>
      <input
        hidden
        id={`${id}`}
        name={`${id}`}
        title={`Thumbnail ${id} selected`}
        value={id}
        type="checkbox"
        checked={false}
        onChange={onChange}
      />
      <div className={classes}></div>
    </>
  );
}
