import { Global, css } from '@emotion/core';

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        font-size: 10px;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
    `}
  />
);
