import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../components/Logo';

const Header = () => {
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

  return (
    <div className="inset-x-0 z-30 flex h-12 flex-none items-center justify-between gap-6 px-4 border-b border-gray-300/10 drop-shadow-xl !bg-transparent">
      <Logo onClick={logoOnClickHandler} />
      <div className="flex items-center gap-2">
        <Button type="button" onClick={logInButtonOnClickHandler} size="header">
          로그인
        </Button>
        <Button type="button" onClick={signInButtonOnClickHandler} size="header">
          회원가입
        </Button>
      </div>
      <div className="hidden">
        <Button type="button" onClick={myPageButtonOnClickHandler} size="header">
          마이페이지
        </Button>
      </div>
    </div>
  );
};

export default Header;
