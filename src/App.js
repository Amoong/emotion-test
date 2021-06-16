import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.scss";

import Nav from "./Nav";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <div className={isDarkTheme ? "dark" : "light"}>
      <div className={styles.App}>
        <h1 className={styles.title}>css-module</h1>
        <button size="small" onClick={() => setIsDarkTheme(!isDarkTheme)}>
          {isDarkTheme ? "🌙" : "☀️"}
        </button>
        <Router>
          <Nav />
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
