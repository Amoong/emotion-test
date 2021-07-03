/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import Button from "./Button";

const InnerPageCss = css`
  padding: 20px;
`;

const h1Css = theme => css`
  font-size: 3rem;
  color: ${theme.textColor2};
  margin-bottom: 20px;
`;

function InnerPage() {
  return (
    <div css={InnerPageCss}>
      <h1 css={h1Css}>Inner Page</h1>
      <Button large>large button</Button>
      <Button btnStyle="2">normal button</Button>
      <Button btnStyle="3">normal button</Button>
    </div>
  );
}

export default InnerPage;
