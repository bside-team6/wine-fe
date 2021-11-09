import { Switch, Route } from 'react-router-dom';
import WineListMain from './WineListMain';
function WineList() {
  return (
    <Switch>
      <Route exact path="/wine-list">
        <WineListMain />
      </Route>
    </Switch>
  );
}

export default WineList;
