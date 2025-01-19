export type LogInFormType = {
  nickname: string;
  id: string;
  password: string;
};

export type PostsType = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export type AuthStoreType = {
  hasToken: boolean;
  signInFn: () => void;
  signOutFn: () => void;
};
