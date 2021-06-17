/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { css, Global, ThemeProvider } from "@emotion/react";

import reset from "./reset";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";

import styles from "./App.module.scss";

import Nav from "./Nav";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";

const appCss = (theme) => css`
  background-color: ${theme.colors.background1};
  color: ${theme.colors.text1};
`;

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <div>
      <Global styles={reset} />
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <div css={appCss}>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
