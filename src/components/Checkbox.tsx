import styles from "@styles/modules/Checkbox.module.scss";
import { classNames } from "@/helpers/classnames.helper";

type CheckboxProps = {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({
  id,
  onChange,
  checked,
}: CheckboxProps) {
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
