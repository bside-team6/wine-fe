import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    breakpoints: {
      lg: string;
    };
    colors: {
      main: {
        primary: string;
        dark: string;
        light1: string;
        light2: string;
      };
      border: string;
      white: string;
      black: string;
      black01: string;
      black02: string;
      black04: string;
      black05: string;
      black06: string;
      black07: string;
      black08: string;
      black09: string;
      black10: string;
      shadow: string;
    };
    typography: {
      lato: string;
    };
  }
}
