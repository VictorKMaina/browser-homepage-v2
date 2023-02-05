import { IconifyIcon } from "@iconify-icon/react";
import React, { PropsWithChildren, useRef } from "react";
import styles from "@styles/modules/Input.module.scss";
import { Icon } from "@iconify-icon/react";
import { useAside } from "@/contexts/Aside.context";

interface InputProps extends PropsWithChildren {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  icon: string | IconifyIcon;
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
}: InputProps) {
  const inputRef = useRef(null);
  const [asideOpen, toggleAside] = useAside();

  function focusInputRef() {
    inputRef.current &&
      (inputRef.current as HTMLInputElement).focus({ preventScroll: true });
    asideOpen && toggleAside()
  }

  return (
    <div onClick={focusInputRef} className={styles["input-wrapper"]}>
      <input
        title={`${name} input`}
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        ref={inputRef}
      />

      {children}

      {button || <Icon icon={icon} />}
    </div>
  );
}
