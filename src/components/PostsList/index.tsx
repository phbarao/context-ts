import React from 'react';

import { usePosts } from '../../contexts/posts';
import PostItem from '../PostItem';
import { Container } from './styles';

const PostsList: React.FC = () => {
  const { posts } = usePosts();

  return (
    <Container>
      {posts.map((post) => (
        <PostItem key={post.id} title={post.title} body={post.body} />
      ))}
    </Container>
  );
};

export default PostsList;
