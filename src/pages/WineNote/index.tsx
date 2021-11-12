import { Route, Routes } from 'react-router-dom';
import MyWineNote from './MyWineNote';
import WineNoteDetail from './WineNoteDetail';
import WineNoteMain from './WineNoteMain';
import WriteWineNote from './WriteWineNote';

const WindNote = () => {
  return (
    <Routes>
      <Route index element={<WineNoteMain />} />
      <Route path="my-note" element={<MyWineNote />} />
      <Route path="write" element={<WriteWineNote />} />
      <Route path=":wineNoteId" element={<WineNoteDetail />} />
    </Routes>
  );
};

export default WindNote;
