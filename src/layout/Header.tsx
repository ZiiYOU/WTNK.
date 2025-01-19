import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../components/Logo';
import { useAuthStore } from '../store/useAuthStore';
import { AuthStoreType } from '../types/WTNK.types';

const Header = () => {
  const { hasToken, signOutFn }: Partial<AuthStoreType> = useAuthStore();
  const navigate = useNavigate();

  const logoOnClickHandler = () => {
    navigate('/');
  };

  const logInButtonOnClickHandler = () => {
    navigate('/logIn');
  };

  const signInButtonOnClickHandler = () => {
    navigate('/signIn');
  };

  const myPageButtonOnClickHandler = () => {
    navigate('/myPage');
  };

  const signOutButtonOnClickHandler = () => {
    signOutFn();
    navigate('/logIn');
  };

  return (
    <div className="inset-x-0 z-30 flex h-12 flex-none items-center justify-between gap-6 px-4 border-b border-gray-300/10 drop-shadow-xl !bg-transparent">
      <Logo onClick={logoOnClickHandler} />
      <div className={`flex items-center gap-2 ${hasToken ? 'hidden' : 'block'}`}>
        <Button type="button" onClick={logInButtonOnClickHandler} size="header">
          로그인
        </Button>
        <Button type="button" onClick={signInButtonOnClickHandler} size="header">
          회원가입
        </Button>
      </div>
      <div className={`flex items-center gap-2 ${hasToken ? 'block' : 'hidden'}`}>
        <Button type="button" onClick={myPageButtonOnClickHandler} size="header">
          마이페이지
        </Button>
        <Button type="button" size="header" onClick={signOutButtonOnClickHandler}>
          로그아웃
        </Button>
      </div>
    </div>
  );
};

export default Header;
