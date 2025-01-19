import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/post.api';

export const usePosts = () => {
  return useQuery({
    queryKey: ['todo'],
    queryFn: async () => {
      const response = await getPosts();
      return response;
    }
  });
};
