import React, { Children } from 'react';
import { connectField, joinName } from 'uniforms';

import AutoField from './AutoField';
import ListDelField from './ListDelField';

const ListItem = ({ removeIcon, ...props }) => (
  <div className="row">
    <div className="col-1">
      <ListDelField name={props.name} removeIcon={removeIcon} />
    </div>

    {props.children ? (
      Children.map(props.children, child =>
        React.cloneElement(child, {
          className: 'col-11',
          name: joinName(props.name, child.props.name),
          label: null,
        }),
      )
    ) : (
      <AutoField {...props} className="col-11" />
    )}
  </div>
);
export default connectField(ListItem, {
  includeInChain: false,
  includeParent: true,
});
