import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    top: 0;
`;

// ---------------------------------------------------------------//

export const MovieDetailWrapper = styled.div`
    height: 470px;
    width: 700px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    z-index: 10;
    border-radius: 10px;
    background-color: #fff;
    margin-top: 70px;

    @media (max-width: 480px) {
        height: 700px;
        width: 350px;
    }

`;

// ---------------------------------------------------------------//

export const CardDetail = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0) 80%, rgba(255, 86, 86, 1) 80%);    
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 60px;

    @media (max-width: 480px) {
        padding: 0 20px;
    }

    .close-button{
        position: absolute;
        top: 50px;
        right: -20px;

        button{
            height: 60px;
            width: 60px;
            border-radius: 50%;
            border: none;
        }
    }

    .image-movie{
        height: 140px;
        width: 110px;
        margin-top: 20px;
        
        img{
            height: 140px;
            width: 110px;
        }

        @media (max-width: 480px) {
           margin-top : 70px;
        }
    }
    
    .tittle-movie{
        margin-top: 10px;
        h1{
            font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 1.5em;
        }
    }

    .release-movie{
        margin-top: 10px;

        p{
            color: grey;
        }
    }
    
    .movie-heart{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: rgba(255, 86, 86, 0.9);
        margin-top: 10px;
        
        svg:nth-child(5){
            color: black;
        }
        
        p{
            font-size: 0.8em;
            color: #000;
            margin-top: 5px;
            color: grey;
        }
    }

    .movie-sinopse{
        margin-top: 10px;
        font-weight: bold;
        line-height: 1.8em;
    }
`;

