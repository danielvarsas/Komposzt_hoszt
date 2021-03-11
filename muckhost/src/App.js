import React from "react";
import Menu from "./Menu";
import Info from "./Pages/Info";
import Map from "./Pages/Map";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="page">
        <header>
          <Menu />
        </header>
        <main>
          <Switch>
            {/* <Route path="/bemutatkozas">
              <Introduction />
            </Route> */}
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/gyik">
              <Gyik />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            {/* <Route path="/jelentkezes">
              <Jelentkezes />
            </Route> */}
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
