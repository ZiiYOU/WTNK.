import PostBox from './PostBox';
import { usePosts } from '../queries/usePostsQueries';
import { useEffect, useState } from 'react';
import { AuthStoreType, PostsType } from '../types/WTNK.types';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

interface CommunityBoxProps {
  isCommunityPage: boolean;
}

const CommunityBox = ({ isCommunityPage }: CommunityBoxProps) => {
  const { hasToken }: Partial<AuthStoreType> = useAuthStore();
  const [posts, setPosts] = useState<PostsType[]>([]);
  const { data, isPending, isError } = usePosts();
  const navigate = useNavigate();

  useEffect(() => {
    setPosts(data);
  }, [data]);

  if (isPending) {
    return <div>로딩중..</div>;
  }
  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  const onClickHandler = () => {
    if (hasToken) {
      navigate('/community');
      return;
    }
    alert('로그인 후 이용 가능합니다.');
    navigate('/logIn');
  };
  return (
    <div className="w-full flex flex-col mt-[5%] px-16 space-y-8 ">
      <div className="flex justify-between">
        <div className="font-bold text-4xl">Community</div>
        {!isCommunityPage && (
          <Button type="button" size="header" onClick={onClickHandler}>
            + 더보기
          </Button>
        )}
      </div>

      <div className={`grid ${!isCommunityPage && 'grid-cols-2'} gap-4`}>
        {posts &&
          posts
            .filter((_, idx) => idx < 6)
            .map((post: PostsType) => <PostBox title={post.title} key={post.id}></PostBox>)}
      </div>
    </div>
  );
};

export default CommunityBox;
