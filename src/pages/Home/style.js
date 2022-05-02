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
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding: 10px;
        max-height: 100px;
        
        h1{
            text-transform: uppercase;
            font-weight: bold;
        }
        
        p{
            
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

        p{
            text-overflow: ellipsis;
            overflow: hidden;
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
    }

    button:nth-child(odd){
        width: 150px;
        margin: 0 100px;
    }

    button:nth-child(2){
        width: 80px;
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

