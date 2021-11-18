import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import WineDetail from './WineDetail';
import WineList from './WineList';

function Wine() {
  return (
    <Routes>
      <Route index element={<WineList />} />
      <Route
        path=":wineId"
        element={
          <Suspense fallback={null}>
            <WineDetail />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default Wine;
