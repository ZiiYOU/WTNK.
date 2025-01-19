import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../components/Logo';
import { useAuthStore } from '../store/useAuthStore';
import { AuthStoreType } from '../types/WTNK.types';

const Header = () => {
  const { hasToken, signOutFn }: Partial<AuthStoreType> = useAuthStore();
  const navigate = useNavigate();

  const onClickNavigateHandler = (url: string) => {
    navigate(url);
  };

  const signOutHandler = () => {
    signOutFn();
    navigate('/logIn');
  };

  return (
    <div className="inset-x-0 z-30 flex h-12 flex-none items-center justify-between gap-6 px-4 border-b border-gray-300/10 drop-shadow-xl !bg-transparent">
      <Logo onClick={() => onClickNavigateHandler('/')} />
      <div className={`flex items-center gap-2 ${hasToken ? 'hidden' : 'block'}`}>
        <Button type="button" onClick={() => onClickNavigateHandler('/logIn')} size="header">
          로그인
        </Button>
        <Button type="button" onClick={() => onClickNavigateHandler('/signUp')} size="header">
          회원가입
        </Button>
      </div>
      <div className={`flex items-center gap-2 ${hasToken ? 'block' : 'hidden'}`}>
        <Button type="button" onClick={() => onClickNavigateHandler('/myPage')} size="header">
          마이페이지
        </Button>
        <Button type="button" size="header" onClick={signOutHandler}>
          로그아웃
        </Button>
      </div>
    </div>
  );
};

export default Header;
