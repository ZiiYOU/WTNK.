import { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';
import { LogInFormType } from '../types/WTNK.types';
import { useNavigate } from 'react-router-dom';

interface LogInFormProps {
  isLogInProps: boolean;
}

const LogInForm = ({ isLogInProps }: LogInFormProps) => {
  const navigate = useNavigate();
  const [isLogIn, setIsLogIn] = useState<boolean>(true);
  const [logInValue, setLogInValue] = useState<LogInFormType>({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    setIsLogIn(isLogInProps);
  }, []);

  const signInOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLogInValue((prev) => ({ ...prev, [name]: value }));
  };

  const buttonOnClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/signIn');
  };

  const logInSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    // 유효성 검사
    if (!logInValue.email.trim().length) {
      console.log(logInValue);
      alert('이메일을 입력해주세요.');
      return;
    }

    if (!logInValue.password.trim().length) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    if (!isLogIn && !logInValue.username.trim().length) {
      alert('이름을 입력해주세요.');
      return;
    }

    // 아이디 유효성 검사
    if (logInValue.email.length < 4 || logInValue.email.length > 15) {
      alert('이메일은 4~15 글자로 입력하세요.');
      return;
    }

    // 비밀번호 유효성 검사
    if (logInValue.password.length < 4 || logInValue.password.length > 15) {
      alert('비밀번호는 4~15 글자로 입력하세요.');
      return;
    }
    console.log(logInValue);
  };

  return (
    <div className="w-full flex flex-col items-center mt-[10%] space-y-24">
      <div className="font-bold text-4xl">{isLogIn ? 'LogIn' : 'Sign In'}</div>
      <form onSubmit={logInSubmitHandler} className="w-96 flex flex-col gap-12">
        <div className="w-96 flex flex-col gap-4">
          {!isLogIn && <Input placeholder="이름을 입력해주세요." name="username" onChange={signInOnChangeHandler} />}
          <Input placeholder="아이디를 입력해주세요." name="email" onChange={signInOnChangeHandler} />
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
