import styles from "@styles/modules/Button.module.scss";
import { CSSProperties, MouseEventHandler, PropsWithChildren } from "react";
import { Icon, IconifyIcon } from "@iconify-icon/react";
import { classNames } from "@/helpers/classnames.helper";

type ButtonProps = {
  icon?: string | IconifyIcon;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  classes?: (string | boolean)[];
} & PropsWithChildren;

function Button({
  children,
  icon,
  style,
  type,
  onClick,
  classes,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={
        classes ? classNames(styles["btn"], ...classes) : styles["btn"]
      }
      style={style}
    >
      {icon && <Icon icon={icon} />}
      {children}
    </button>
  );
}

export default Button;
