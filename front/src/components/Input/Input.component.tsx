import React from "react";
import classnames from "classnames/bind";
import styles from "./Input.module.scss";
import { InputProps } from "./Input.model";
import { RenderCount } from "../RenderCount";

const classnamesCx = classnames.bind(styles);

export const Input: React.FunctionComponent<InputProps> = ({
  value,
  valid,
  autoCapitalize,
  name,
  type,
  placeholder,
  defaultValue,
  disabled,
  onChange,
  onBlur,
  onFocus
}) => {
  const underlineClasses = classnamesCx({
    underline: true,
    valid: valid && value.length > 0,
    invalid: !valid && value.length > 0
  });

  return (
    <div className={styles.container}>
      <RenderCount />
      <input
        type={type}
        autoCapitalize={autoCapitalize ? "sentences" : "off"}
        name={name}
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <label>{placeholder}</label>
      <span className={underlineClasses} />
    </div>
  );
};
