import DatePicker from 'antd/lib/date-picker';
import React from 'react';
import moment from 'moment';
import { connectField, filterDOMProps } from 'uniforms';

import wrapField from './wrapField';

const Date = (props: any) =>
  wrapField(
    props,
    <DatePicker
      disabled={props.disabled}
      id={props.id}
      name={props.name}
      onChange={value => props.onChange(value && value.toDate())}
      placeholder={props.placeholder}
      ref={props.inputRef}
      value={props.value && moment(props.value)}
      {...filterDOMProps(props)}
    />,
  );
Date.defaultProps = {
  showTime: true,
  style: { width: '100%' },
};

export default connectField(Date, { ensureValue: false });
