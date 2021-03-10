import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="page">
        <header>
          <Menu />
        </header>
        <main>
          <Switch>
            <Route path="/bemutatkozas">
              <Introduction />
            </Route>
            <Route path="/map">
              <MapPage />
            </Route>
            <Route path="/blog/:postId">
              <BlogPost />
            </Route>
            <Route path="/blog">
              <BlogList />
            </Route>
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
