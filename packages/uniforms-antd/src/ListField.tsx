import Icon from 'antd/lib/icon';
import React, { Children } from 'react';
import Tooltip from 'antd/lib/tooltip';
import { connectField, filterDOMProps, joinName } from 'uniforms';

import ListItemField from './ListItemField';
import ListAddField from './ListAddField';

const List = ({
  children,
  error,
  errorMessage,
  info,
  initialCount,
  itemProps,
  label,
  labelCol,
  name,
  showInlineError,
  value,
  wrapperCol,
  ...props
}: any) => (
  <div {...filterDOMProps(props)}>
    {!!label && (
      <div>
        {label}
        {!!info && (
          <span>
            &nbsp;
            <Tooltip title={info}>
              <Icon type="question-circle-o" />
            </Tooltip>
          </span>
        )}
      </div>
    )}

    {!!(error && showInlineError) && <div>{errorMessage}</div>}

    {children
      ? value.map((item: any, index: number) =>
          Children.map(children, child =>
            React.cloneElement(child, {
              key: index,
              label: null,
              name: joinName(
                name,
                child.props.name && child.props.name.replace('$', index),
              ),
            }),
          ),
        )
      : value.map((item: any, index: number) => (
          <ListItemField
            key={index}
            label={null}
            labelCol={labelCol}
            name={joinName(name, index)}
            wrapperCol={wrapperCol}
            {...itemProps}
          />
        ))}

    <ListAddField name={`${name}.$`} initialCount={initialCount} />
  </div>
);

List.defaultProps = {
  style: {
    border: '1px solid #DDD',
    borderRadius: '7px',
    marginBottom: '5px',
    marginTop: '5px',
    padding: '10px',
  },
};

export default connectField(List, {
  ensureValue: false,
  includeInChain: false,
});
