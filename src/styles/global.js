import {createGlobalStyle} from 'styled-components'
import logan_bg from '../assets/logan-wolverine-art_1580587435.jpg'


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root{
        height: 100%;
        background-color: rgba(255, 86, 86, 0.6);
    }

    body{
        background-image: url(${logan_bg});
        background-size: 100% 100%;
    }

    ul{
        list-style-type: none;
    }

    p{
        font-family: sans-serif;
    }

    a{
        text-decoration: none;
    }
`;