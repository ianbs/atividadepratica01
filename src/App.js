import { HeaderMenu } from "./components/HeaderMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutPage } from "./views/about";
import { HomePage } from "./views/home";
import { DescriptionPage } from "./views/description";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderMenu />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/description">
            <DescriptionPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
