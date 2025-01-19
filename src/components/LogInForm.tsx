import { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';
import { AuthStoreType, LogInFormType } from '../types/WTNK.types';
import { useNavigate } from 'react-router-dom';
import { logIn, signUp } from '../api/auth.api';
import { useAuthStore } from '../store/useAuthStore';

interface LogInFormProps {
  isLogInProps: boolean;
}

const LogInForm = ({ isLogInProps }: LogInFormProps) => {
  const navigate = useNavigate();
  const [isLogIn, setIsLogIn] = useState<boolean>(true);
  const [logInValue, setLogInValue] = useState<LogInFormType>({
    nickname: '',
    id: '',
    password: ''
  });
  const { signInFn }: Partial<AuthStoreType> = useAuthStore();

  useEffect(() => {
    setIsLogIn(isLogInProps);
  }, []);

  const buttonOnClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/signIn');
  };

  const signInOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLogInValue((prev) => ({ ...prev, [name]: value }));
  };

  // submit 요청 함수
  const logInSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    // 유효성 검사
    if (!logInValue.id.trim().length) {
      alert('아이디를 입력해주세요.');
      return;
    }

    if (!logInValue.password.trim().length) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    if (!isLogIn && !logInValue.nickname.trim().length) {
      alert('이름을 입력해주세요.');
      return;
    }

    // 아이디 유효성 검사
    if (logInValue.id.length < 4 || logInValue.id.length > 15) {
      alert('아이디는 4~15 글자로 입력하세요.');
      return;
    }

    // 비밀번호 유효성 검사
    if (logInValue.password.length < 4 || logInValue.password.length > 15) {
      alert('비밀번호는 4~15 글자로 입력하세요.');
      return;
    }

    try {
      // 로그인
      if (isLogIn) {
        await logIn(logInValue);
        signInFn();
        navigate('/');
      }

      // 회원가입
      if (!isLogIn) {
        await signUp(logInValue);
        navigate('/logIn');
      }

      setLogInValue({ nickname: '', password: '', id: '' });
    } catch (error) {
      alert('로그인 혹은 회원가입 도중 문제가 발생했습니다.');
      throw new Error('로그인 / 회원가입 실패');
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-[10%] space-y-24">
      <div className="font-bold text-4xl">{isLogIn ? 'LogIn' : 'Sign In'}</div>
      <form onSubmit={logInSubmitHandler} className="w-96 flex flex-col gap-12">
        <div className="w-96 flex flex-col gap-4">
          {!isLogIn && <Input placeholder="이름을 입력해주세요." name="nickname" onChange={signInOnChangeHandler} />}
          <Input placeholder="아이디를 입력해주세요." name="id" onChange={signInOnChangeHandler} />
          <Input placeholder="비밀번호를 입력해주세요." name="password" onChange={signInOnChangeHandler} />
        </div>
        <div className="w-96 flex flex-col gap-4">
          <Button type="submit" size="default">
            {isLogIn ? '로그인' : '회원가입'}
          </Button>
          {isLogIn && (
            <Button type="button" size="default" onClick={buttonOnClickHandler}>
              회원가입
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
