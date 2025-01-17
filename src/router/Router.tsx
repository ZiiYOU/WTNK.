import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Layout from "../layout/Layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
