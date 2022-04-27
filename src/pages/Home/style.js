import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const CardContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Card = styled.div`
    height: 460px;
    width: 700px;
    background-size: 700px 460px;
    background-repeat: no-repeat;
    margin-top: 50px;
    border-radius: 5px;
    display: flex;
    color: #FFF;
    `;

export const About = styled.div`
    height: 150px;
    width: 100%;
    margin-top: auto;
    padding: 20px;
    
    
    
    .movie-about{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .movie-tittle{
        height: 100%;
        width: 80%;
        border: 1px solid white;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding: 10px;
        
        h1{
            text-transform: uppercase;
            font-weight: bold;
        }
    }
    
    .movie-rating{
        height: 100%;
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .movie-sinopse{
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
    }
`;

