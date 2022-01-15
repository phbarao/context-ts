import React, { memo } from 'react';

import { useThemes } from '../../contexts/themes';
import { Container } from './styles';

interface IPost {
  title: string;
  body: string;
}

const PostItem: React.FC<IPost> = ({ title, body }) => {
  const { theme } = useThemes();

  return (
    <Container theme={theme}>
      <h3>{title}</h3>
      <p>{body}</p>
    </Container>
  );
};

export default memo(PostItem);
