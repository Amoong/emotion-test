/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const ButtonCss = props => theme =>
  css`
    background: ${theme["btnBgColor" + props.btnStyle]};
    color: ${theme.btnColor};
    font-size: 2em;
    padding: ${props.large ? "20" : "10"}px;
  `;

function Button(props) {
  const { btnStyle, large } = props;
  return <button css={ButtonCss({ large, btnStyle })}>{props.children}</button>;
}

Button.defaultProps = {
  btnStyle: "1",
};

export default Button;
