
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PlacePage from "./components/pages/PlacePage";
import FlightPage from "./components/pages/FlightPage";
import LoginPage from "./components/pages/LoginPage";
import FlightHistoryPage from "./components/pages/FlightHistoryPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/places/:placeID/flight/:flightID" exact>
            <FlightPage />
          </Route>
          <Route path="/places/:placeID" exact>
            <PlacePage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/flights-history" exact>
            <FlightHistoryPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
