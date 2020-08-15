import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./color";

const spin = keyframes`

to {
    transform:rotate(360deg);
}


`;

const NavBar = () => {
  const [padding, setpadding] = useState(15);
  return (
    <header
      onClick={() => setpadding(padding + 1)}
      css={css`
        background-color: ${colors.light};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt me !</Link>
      <span
        css={css`
          &:hover {
            background-color: ${colors.secondary};
          }
          display: inline-block;
          animation: 5s ${spin} linear infinite;
        `}
        role="img"
        aria-label="logo"
      >
        🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔
      </span>
    </header>
  );
};
export default NavBar;
