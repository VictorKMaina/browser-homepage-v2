import styles from "./button.module.scss";
import { CSSProperties, MouseEventHandler, PropsWithChildren } from "react";
import { Icon, IconifyIcon } from "@iconify-icon/react";

type ButtonProps = {
  icon?: string | IconifyIcon;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
} & PropsWithChildren;

function Button({ children, icon, style, type, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={styles["btn"]}
      style={style}
    >
      {icon && <Icon icon={icon} />}
      {children}
    </button>
  );
}

export default Button;
