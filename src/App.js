/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css, Global, ThemeProvider } from "@emotion/react";

import GlobalStyle from "./GlobalStyle";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";

import InnerPage from "./InnerPage";

const appCss = theme => css`
  box-sizing: border-box;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.bgColor};
  padding: 20px;
  color: ${theme.textColor1};
  transition: background-color 0.5s;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
`;

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div>
      <Global styles={GlobalStyle} />
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <div css={appCss}>
          <h1>emotion</h1>
          <button size="small" onClick={() => setIsDarkTheme(!isDarkTheme)}>
            change theme
          </button>
          <InnerPage />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
