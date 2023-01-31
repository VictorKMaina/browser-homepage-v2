import { IconifyIcon } from "@iconify-icon/react";
import { PropsWithChildren } from "react";
import styles from "./input.module.scss";
import { Icon } from "@iconify-icon/react";

interface BaseInputProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
}

interface InputProps extends PropsWithChildren, BaseInputProps {
  icon: string | IconifyIcon;
  textearea?: boolean;
  button?: React.ReactNode;
}

export default function Input({
  children,
  id,
  name,
  placeholder,
  icon,
  button,
  textearea = false,
  value,
}: InputProps) {
  const inputProps = { id, name, placeholder, value };

  return (
    <label htmlFor={id} className={styles["input-wrapper"]}>
      {textearea ? <TextArea {...inputProps} /> : <TextInput {...inputProps} />}

      {children}

      {button || <Icon icon={icon} />}
    </label>
  );
}

function TextInput(props: BaseInputProps) {
  const { id, name, placeholder, value } = props;
  return (
    <input
      id={id}
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
    />
  );
}

function TextArea(props: BaseInputProps) {
  const { id, name, placeholder, value } = props;

  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
    ></textarea>
  );
}
