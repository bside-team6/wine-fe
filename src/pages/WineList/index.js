import { Route, Routes } from 'react-router-dom';
import WineListMain from './WineListMain';

function WineList() {
  return (
    <Routes>
      <Route index element={<WineListMain />} />
    </Routes>
  );
}

export default WineList;
