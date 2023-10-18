import React, { useState, createContext } from 'react';

import Post from '../Post/Post';
import Header from '../Header';

export const ThemeContext = createContext('dark');

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.floor(Math.random() * 999999),
      title: "Notícia 1",
      subtitle: "Está é a notícia 1",
      likes: Math.floor(Math.random() * 100),
      read: false,

    },
    {
      id: Math.floor(Math.random() * 999999),
      title: "Notícia 2",
      subtitle: "Está é a notícia 2",
      likes: Math.floor(Math.random() * 100),
      read: false,
    },
    {
      id: Math.floor(Math.random() * 999999),
      title: "Notícia 3",
      subtitle: "Está é a notícia 3",
      likes: Math.floor(Math.random() * 100),
      read: true,
    },
  ]);
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    console.log(theme);
    setTheme((prevState) => (
      prevState === 'dark'
      ? 'light'
      : 'dark'
    ));
  }

  function handleRefreshPosts() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 999999),
        title: `Notícia ${prevState.length + 1}`,
        subtitle: `Está é a notícia ${prevState.length + 1}`,
        likes: Math.floor(Math.random() * 100),
        read: false,
      }
    ])
  }

  function handleRemovePost(postId) {
    setPosts((prevState) =>
    prevState.filter(post => post.id !== postId));
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Header 
        title="JStack's Blog"
        addPost={handleRefreshPosts}
        onToggleTheme={handleToggleTheme}
        theme={theme}
      />

      <hr />

      {posts.map(post => (
        <Post 
          key = {post.id}
          onRemove={handleRemovePost}
          post={post}
          theme={theme}
        />
      ))}
    </ThemeContext.Provider>
  );
}

export default App;