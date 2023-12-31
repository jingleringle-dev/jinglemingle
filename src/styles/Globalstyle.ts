import { createGlobalStyle } from "styled-components";

import "./font.css";

const GlobalStyles = createGlobalStyle`
    // 적용시킬 css 입력
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
        font-family: "UhBeeZZIBA-Regular", sans-serif;

    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table, button{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 1em;
        font-family: "UhBeeZZIBA-Regular", sans-serif;
        vertical-align: baseline;


    }
    body{
        line-height: 1;

      
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    input{
        outline: none;
    }
 
`;

export default GlobalStyles;
