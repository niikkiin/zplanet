import { createGlobalStyle } from 'styled-components';

import { helpers } from 'utilities/helpers/helpers.component';

const { phone, desktop, highResDesktop } = helpers;

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /* equivalent to 10px; 1rem = 10px; 10px/16px */

    @media ${phone} {
      // 7px/16px
      font-size: 43.75%;
    }
    @media ${desktop} {
      // 12px/16px
      font-size: 75%;
    }
    @media ${highResDesktop} {
      // 12px/16px
      font-size: 75%;
    }
  }

  body {
    box-sizing: border-box;
    font-family: 'Muli', sans-serif;
  }


`;