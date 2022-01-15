import React, { useState, useContext, useEffect, createContext } from 'react';

import api from '../services/api';

interface IPost {
  id: string;
  title: string;
  body: string;
}

interface IPostsContext {
  posts: IPost[];
  loadPosts(): void;
}

const PostsContext = createContext({} as IPostsContext);

export const PostsProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const amount = 12;

  async function loadPosts(): Promise<void> {
    const { data } = await api.get('/posts');

    setPosts([...posts, ...data.slice(currentIndex, currentIndex + amount)]);

    setCurrentIndex(currentIndex + amount);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, loadPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = (): IPostsContext => useContext(PostsContext);
