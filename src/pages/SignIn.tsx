import Button from '../components/Button';
import Input from '../components/Input';

const SignIn = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[10%] space-y-24">
      <div className="font-bold text-4xl">Sign In</div>
      <div className="w-96 flex flex-col gap-16">
        <div className="w-96 flex flex-col gap-4">
          <Input placeholder="이름을 입력해주세요." />
          <Input placeholder="생년월일을 입력해주세요." />
          <Input placeholder="아이디를 입력해주세요." />
          <Input placeholder="비밀번호를 입력해주세요." />
        </div>
        <Button size="default">회원가입</Button>
      </div>
    </div>
  );
};

export default SignIn;
