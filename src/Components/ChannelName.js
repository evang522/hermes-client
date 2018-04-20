import React from 'react';
export default props => {
  return (
    <li>{props.name ? props.name : ''}</li>
  )
}