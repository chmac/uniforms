import React from 'react';
import classnames from 'classnames';
import { connectField } from 'uniforms';

import wrapField from './wrapField';

const Radio = props =>
  wrapField(
    props,
    props.allowedValues.map(item => (
      <div
        key={item}
        className={classnames(props.inputClassName, 'form-check', 'radio', {
          'text-danger': props.error,
          'custom-control-inline': props.inline,
        })}
      >
        <label htmlFor={`${props.id}-${item}`} className="form-check-label">
          <input
            checked={item === props.value}
            className="form-check-input"
            disabled={props.disabled}
            id={`${props.id}-${item}`}
            name={props.name}
            onChange={() => props.onChange(item)}
            type="radio"
          />{' '}
          {props.transform ? props.transform(item) : item}
        </label>
      </div>
    )),
  );
export default connectField(Radio);
