import "./App.css";


import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PlacePage from "./components/pages/PlacePage";
import FlightPage from "./components/pages/FlightPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/places/:placeID/flight/:flightID" exact >
            <FlightPage />
          </Route>
          <Route path="/places/:placeID" exact >
            <PlacePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
