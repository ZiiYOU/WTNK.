import { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';
import { useQuery } from '@tanstack/react-query';

interface LogInFormProps {
  isLogInProps: boolean;
}

const LogInForm = ({ isLogInProps }: LogInFormProps) => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [logInValue, setLogInValue] = useState({
    name: '',
    id: '',
    password: ''
  });

  const fetchData = async () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    setIsLogIn(isLogInProps);
    fetchData();
  }, []);

  const signInOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLogInValue((prev) => ({ ...prev, [name]: value }));
  };

  console.log(logInValue);
  return (
    <div className="w-full flex flex-col items-center mt-[10%] space-y-24">
      <div className="font-bold text-4xl">{isLogIn ? 'LogIn' : 'Sign In'}</div>
      <form className="w-96 flex flex-col gap-16">
        <div className="w-96 flex flex-col gap-4">
          {!isLogIn && <Input placeholder="이름을 입력해주세요." name="name" onChange={signInOnChangeHandler} />}
          <Input placeholder="아이디를 입력해주세요." name="id" onChange={signInOnChangeHandler} />
          <Input placeholder="비밀번호를 입력해주세요." name="password" onChange={signInOnChangeHandler} />
        </div>
        <Button type="submit" size="default">
          {isLogIn ? '로그인' : '회원가입'}
        </Button>
      </form>
    </div>
  );
};

export default LogInForm;
