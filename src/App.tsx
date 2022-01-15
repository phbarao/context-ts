import React from 'react';

import { PostsProvider } from './contexts/posts';
import { ThemesProvider } from './contexts/themes';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemesProvider>
      <PostsProvider>
        <Routes />
      </PostsProvider>
    </ThemesProvider>
  );
};

export default App;
