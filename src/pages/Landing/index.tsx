import React from 'react';

import { usePosts, useThemes } from '../../contexts';
import { PostsList, ThemeButton } from '../../components';
import { Container, Button } from './styles';

const Landing: React.FC = () => {
  const { loadPosts } = usePosts();
  const { theme } = useThemes();

  return (
    <Container theme={theme}>
      <ThemeButton />

      <PostsList />

      <Button onClick={loadPosts}>Mais...</Button>
    </Container>
  );
};

export default Landing;
