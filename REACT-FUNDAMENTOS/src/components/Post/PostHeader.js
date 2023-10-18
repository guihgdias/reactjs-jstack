import React from 'react';
import PropTypes from 'prop-types';

export default function PostHeader(props) {
  return (
    <>
      <strong>
          {
            props.read
            ? <s>{props.title}</s>
            : props.title 
          }
      </strong>
      <br />
      <small>{props.subtitle}</small>
    </>
  );
}

PostHeader.propTypes = {
  read: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}