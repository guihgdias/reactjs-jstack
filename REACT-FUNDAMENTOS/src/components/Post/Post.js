import React from 'react'
import PropTypes from 'prop-types';

import { Container } from './styles';

import PostHeader from '../Post/PostHeader.js';
import Button from '../Button';

export default function Post(props) {
  return (
    <>
      <Container
        removed={props.post.read}
      >
        <PostHeader 
          title={props.post.title}
          subtitle={props.post.subtitle}
          read={props.post.read}
        />
        <br />
        <span>Likes: {props.post.likes}</span>
        <br />
        <Button
          onClick={() => props.onRemove(props.post.id)}
          theme={props.theme}
        >
          Excluir
        </Button>
      </Container>
      <br />
      <br />
    </>
  );
}

Post.propTypes = {
  theme: PropTypes.string.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  })
};