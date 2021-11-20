import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --white:#f5f5f5;
        --vanilla: #f1ede0;
        --black: #0c0d0d;
        --orange: #c85311;
        --gray: #666360;
    }

    body{
        background: var(---vanilla);
        color: var(---black);
    }

    body, input, button{
        font-family: 'PT Serif', serif;
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`