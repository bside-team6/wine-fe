import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '~/components/layout/Layout';
import { Admin, Main, WineNote } from '~/Routes';

function App() {
  // TODO: 앱 시작시 store에서 읽어서 axios header에 와인이지 토큰 세팅

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/*" element={<Main />} />
          <Route path="admin/*" element={<Admin />} />
          <Route path="wine-note/*" element={<WineNote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
