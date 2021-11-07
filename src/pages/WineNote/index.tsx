import { Route, Routes } from 'react-router-dom';
import WineNoteDetail from './WineNoteDetail';
import WineNoteMain from './WineNoteMain';

const WindNote = () => {
  // TODO: 와인노트작성, 와인노트수정 라우트 추가
  return (
    <Routes>
      <Route index element={<WineNoteMain />} />
      <Route path=":wineNoteId" element={<WineNoteDetail />} />
    </Routes>
  );
};

export default WindNote;
