import { IconifyIcon } from "@iconify-icon/react";
import { PropsWithChildren } from "react";
import styles from "./input.module.scss";
import { Icon } from "@iconify-icon/react";

interface BaseInputProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: () => void;
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
  value,
  onChange,
  icon,
  button,
  textearea = false,
}: InputProps) {
  const inputProps = { id, name, placeholder, value };

  return (
    <label htmlFor={id} className={styles["input-wrapper"]}>
      {textearea ? <TextArea onChange={onChange} {...inputProps} /> : <TextInput onChange={onChange} {...inputProps} />}

      {children}

      {button || <Icon icon={icon} />}
    </label>
  );
}

function TextInput({ id, name, placeholder, value, onChange }: BaseInputProps) {
  return (
    <input
      id={id}
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

function TextArea({ id, name, placeholder, value, onChange }: BaseInputProps) {
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  );
}
