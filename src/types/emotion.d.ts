import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      main: {
        primary: string;
        dark: string;
        light1: string;
        light2: string;
      };
      border: string;
      black02: string;
      black04: string;
      black06: string;
      black07: string;
      black08: string;
      shadow: string;
    };
    typography: {
      lato: string;
    };
  }
}
