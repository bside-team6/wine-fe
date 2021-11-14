import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from '~/components/common/ErrorBoundary';
import Layout from '~/components/layout/Layout';
import useKakao from '~/hooks/useKakao';
import { Admin, Main, WineList, WineNote } from '~/Routes';

function App() {
  useKakao();

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Suspense fallback={null}>
                <Layout />
              </Suspense>
            }
          >
            <Route path="/*" element={<Main />} />
            <Route path="admin/*" element={<Admin />} />
            <Route path="wine-list/*" element={<WineList />} />
            <Route path="wine-note/*" element={<WineNote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
