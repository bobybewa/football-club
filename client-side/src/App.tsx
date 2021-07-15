import './App.css';
import Navbar from './components/navbar/navbar'
import {
  Switch,
  Route
} from "react-router-dom";
import AreasPage from './views/areas/areas'
import ChildAreasPage from './views/childAreas/childArea'
import TeamsPage from './views/teams/teams'
import TeamPage from './views/team/team'
import GetPlayerPage from './views/players/players'
function App() {
  return (
    <div className="App bg-green-400">
      <Navbar/>
      <Switch>
        <Route path="/teams/:id">
          <TeamPage/>
        </Route>
        <Route path="/areas/:id">
          <ChildAreasPage/>
        </Route>
        <Route path="/teams">
          <TeamsPage/>
        </Route>
        <Route path="/players">
          <GetPlayerPage/>
        </Route>
        <Route exact path="/">
          <AreasPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
