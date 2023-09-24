import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    ul, ol, li{
        list-style:none;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: 0;
    }

    :root{
      --white:#fff;
      --grey-1:#CCCCCC;
      --grey-2:#666666;
      --grey-3:#333333;
      --red-1:#EB5757;
      --purple-1:#7A5CFA;
      --purple-2:#e4defe;
      --f-family: 'Noto Sans', sans-serif;

    }

    body{
      font-family: var(--f-family);
      overflow-x:hidden;
    }
`;
