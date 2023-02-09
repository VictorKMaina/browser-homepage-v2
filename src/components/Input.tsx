import { IconifyIcon } from "@iconify-icon/react";
import React, { PropsWithChildren, useRef } from "react";
import styles from "@styles/modules/Input.module.scss";
import { Icon } from "@iconify-icon/react";
import { forwardRef, useImperativeHandle } from "react";

interface InputProps extends PropsWithChildren {
  htmlID: string;
  htmlName: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  icon: string | IconifyIcon;
  button?: React.ReactNode;
}

export default forwardRef(function Input(
  {
    children,
    htmlID,
    htmlName,
    placeholder,
    value,
    onChange,
    icon,
    button,
  }: InputProps,
  ref
) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus: focusInputRef,
      };
    },
    []
  );

  function focusInputRef() {
    inputRef.current &&
      (inputRef.current as HTMLInputElement).focus({ preventScroll: true });
  }

  return (
    <div onClick={focusInputRef} className={styles["input-wrapper"]}>
      <input
        title={`${htmlName} input`}
        id={htmlID}
        name={htmlName}
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
});
