import "./App.css";


import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PlacePage from "./components/pages/PlacePage";
import FlightPage from "./components/pages/FlightPage";
import LoginPage from "./components/pages/LoginPage";

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
          <Route path="/login" exact >
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
