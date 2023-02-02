import { IconifyIcon } from "@iconify-icon/react";
import { PropsWithChildren } from "react";
import styles from "@styles/modules/Input.module.scss";
import { Icon } from "@iconify-icon/react";

interface BaseInputProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
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
  return (
    <label htmlFor={id} className={styles["input-wrapper"]}>
      {textearea ? (
        <TextArea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <TextInput
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}

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
      onChange={(e) => onChange(e)}
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
      onChange={(e) => onChange(e)}
    ></textarea>
  );
}
