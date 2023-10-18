import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import Button from '../Button';


export default function Header(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <header>
      <h1>JStack's Blog</h1>
      <h2>Posts da semana</h2>
      <button onClick={props.addPost}>Adicionar Post</button>
      <Button
        onClick={props.onToggleTheme}
        theme={theme}
      >change theme</Button>
    </header>
  );
}

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
}