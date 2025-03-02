import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';

const Bool = ({
  disabled,
  id,
  inputRef,
  label,
  name,
  onChange,
  value,
  ...props
}) => (
  <div {...filterDOMProps(props)}>
    <input
      checked={value}
      disabled={disabled}
      id={id}
      name={name}
      onChange={() => disabled || onChange(!value)}
      ref={inputRef}
      type="checkbox"
    />

    {label && <label htmlFor={id}>{label}</label>}
  </div>
);
export default connectField(Bool);
