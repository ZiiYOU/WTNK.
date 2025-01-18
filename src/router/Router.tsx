import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Layout from '../layout/Layout';
import LogIn from '../pages/LogIn';
import SignIn from '../pages/SignIn';
import MyPage from '../pages/MyPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/myPage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
