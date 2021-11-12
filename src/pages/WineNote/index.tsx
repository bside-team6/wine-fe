import { Route, Routes } from 'react-router-dom';
import AllWineNotes from './AllWineNotes';
import WineNoteDetail from './WineNoteDetail';
import WineNoteTimeline from './WineNoteTimeline';
import WriteWineNote from './WriteWineNote';

const WindNote = () => {
  return (
    <Routes>
      <Route index element={<AllWineNotes />} />
      <Route path="timeline">
        <Route index element={<WineNoteTimeline />} />
        <Route path=":userId" element={<WineNoteTimeline />} />
      </Route>
      <Route path="write" element={<WriteWineNote />} />
      <Route path=":wineNoteId" element={<WineNoteDetail />} />
    </Routes>
  );
};

export default WindNote;
