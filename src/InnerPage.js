/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import Button from "./Button";

const InnerPageCss = theme => css`
  padding: 20px;
  h1 {
    font-size: 3rem;
    color: ${theme.textColor2};
  }
`;

function InnerPage() {
  return (
    <div css={InnerPageCss}>
      <h1>Inner Page</h1>
      <Button large>large button</Button>
      <Button btnStyle="2">normal button</Button>
      <Button btnStyle="3">normal button</Button>
    </div>
  );
}

export default InnerPage;
