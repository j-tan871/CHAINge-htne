import React from 'react';
import {
  Badge
} from 'reactstrap';

const Tag = props => {
  return (
    <Badge color="secondary" className="mb-2 mr-2"pill>{props.text}</Badge>
  );
}

export default Tag;