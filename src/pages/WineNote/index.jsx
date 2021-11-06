import { Route, Switch } from 'react-router-dom';
import WineNoteDetail from './WineNoteDetail';
import WineNoteMain from './WineNoteMain';

const WindNote = () => {
  // TODO: 와인노트작성, 와인노트수정 라우트 추가
  return (
    <Switch>
      <Route exact path="/wine-note">
        <WineNoteMain />
      </Route>
      <Route path="/wine-note/:wineNoteId">
        <WineNoteDetail />
      </Route>
    </Switch>
  );
};

export default WindNote;
