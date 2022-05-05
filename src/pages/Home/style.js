import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const CardContainer = styled.div`
    height: 100%;
    width: 100%;
    align-items: center;
    flex-direction: column;
    display: flex;
    margin-top: -30px;
    
`;

export const Card = styled.div`
    height: 460px;
    width: 700px;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 50px;
    border-radius: 5px;
    color: #FFF;
    display: flex;
    
    .gradient-effect{
        height: 100%;
        width: 100%;
        display: flex;
        background: rgb(253,253,255);
        background: linear-gradient(0deg, rgba(253,253,255,0.31726193895526966) 39%, rgba(255,255,255,0) 100%);
    }
`;

export const About = styled.div`
    height: 150px;
    width: 100%;
    margin-top: auto;
    padding: 30px;
    
    
    .movie-about{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .movie-tittle{
        height: 60px;
        width: 80%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
        text-transform: uppercase;
        
        h2{
            text-transform: uppercase;
            font-weight: bold;
            font-family: sans-serif;
        }
        
        p{
            font-size: 0.9em;
        }
    }
    
    .movie-rating{
        height: 100%;
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .movie-heart{
            color: rgba(255, 86, 86, 0.9);
        }

        svg:nth-child(5){
            color: #fff;
        }

        p:nth-child(2){
            font-size: 0.8em;
        }
    }
    
    .movie-sinopse{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        
        p{
            text-overflow: ellipsis;
            overflow: hidden;
        }

        button{
            border: none;
            background-color: rgba(0, 0, 0, 0);
            color: red;
            font-size: 1.1em;
        }
    }
`;

export const Buttons = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    
    button{
        border: none;
        height: 50px;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        
        
        img{
            height: 25px;
            width: 25px;
            margin-right: 2px;
        }
        
        p{
            margin-top: 5px;
            margin-left: 2px;
            font-size: 1.1em;
            text-transform: uppercase;
            font-weight: bold;
        }
    }

    button:nth-child(3){
        color: red;
    }

    button:nth-child(2){
        width: 80px;
    }

    button:nth-child(odd){
        width: 150px;
        margin: 0 100px;
    }

    button:hover{
        transition: 1s all;
        transform: scale(1.1)
    }
    
  
`;

export const EmptyMovie = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        color: #fff;
    }

    h1{
        font-family: monospace;
    }
`;

