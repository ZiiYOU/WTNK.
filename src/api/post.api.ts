import axios from 'axios';

const POST_BASE_URL = import.meta.env.VITE_POST_URL;

export const getPosts = async () => {
  try {
    const { data } = await axios.get(`${POST_BASE_URL}/todos`);
    return data;
  } catch (error) {
    throw new Error('게시글을 불러오는 데에 실패했습니다 !');
  }
};
