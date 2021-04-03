import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/project/:id" render={() => <Project />} />
                <Route exact path="/about" render={() => <About />} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
