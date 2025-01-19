import axios from 'axios';
import { LogInFormType } from '../types/WTNK.types';

const Auth_Api = import.meta.env.VITE_AUTH_URL;

export const signUp = async ({ id, password, nickname }: LogInFormType): Promise<any> => {
  try {
    const { data } = await axios.post(`${Auth_Api}/register`, { id, password, nickname });

    return data;
  } catch (error: any) {
    throw new Error('회원가입에 실패하였습니다.');
  }
};

export const logIn = async ({ id, password }: Partial<LogInFormType>): Promise<any> => {
  try {
    const { data } = await axios.post(`${Auth_Api}/login`, { id, password });
    if (data?.accessToken) {
      localStorage.setItem('accessToken', data.accessToken);
    }
    return data;
  } catch (error: any) {
    throw new Error('로그인에 실패하였습니다.');
  }
};
