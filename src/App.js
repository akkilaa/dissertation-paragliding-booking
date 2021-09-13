import "./App.css";


import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
