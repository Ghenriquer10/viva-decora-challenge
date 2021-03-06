import styled from "styled-components";

//------------------------------------------------------//

export const Main = styled.main`

    @media (min-width: 320px) and (max-width: 480px) {
        display: flex;
        flex-direction: row;
    }

`;

export const Container = styled.div`
    width: 100%;
`;

//----------------------------------------------------//

export const CardContainer = styled.div`
    height: 100%;
    width: 100%;
    align-items: center;
    flex-direction: column;
    display: flex;
    margin-top: -30px;
    
`;

//----------------------------------------------------//

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
        background: linear-gradient(0deg, rgba(253,253,255,0.31726193895526966) 10%, rgba(255,255,255,0) 100%);
    }
    
    @media(min-width:320px) and (max-width:480px) {
        height: 350px;
        width: 320px;
        background-size: 100% 100%;
    }
    @media(min-width: 481px) and (max-width: 768px) {
        height: 450px;
        width: 490px;
        background-size: 100% 100%;
    }    
`;

//----------------------------------------------------//

export const About = styled.div`
    height: 150px;
    width: 100%;
    margin-top: auto;
    padding: 30px;
    
    @media (min-width: 320px) and (max-width: 480px) {
        padding: 10px;
    }
    
    .movie-about{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        @media(max-width:480px) {
            flex-direction: column;
        }
        
    }
    //----------------------------------------------------//
    .movie-tittle{
        height: 60px;
        width: 80%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
        text-transform: uppercase;
        
        @media (min-width: 320px) and (max-width: 480px) {
            width: 100%;
            justify-content: center;
            
            h2{
                font-size: 1.1em;
            }
            
            p{
                display: none;
            }

        }

        @media (min-width: 481px) and (max-width: 768px) {
            width: 100%;
            justify-content: center;
            
            h2{
                font-size: 1.1em;
            }

            p{
                display: none;
            }
            
        }
        
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

        
        
        @media (min-width: 320px) and (max-width: 480px) {
            flex-direction: row;
            width: 100%;
            justify-content: space-between;

            svg{
                height: 15px;
                width: 15px;
            }
        }

        @media(min-width: 481px) and (max-width: 768px) {
            flex-direction: row;
            width: 100%;
            justify-content: space-between;

            svg{
                height: 15px;
                width: 15px;
            }
        }

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

        @media (min-width:481px) {
            .mobile-size{
                display: none;
            }
        }

        @media (min-width: 320px) and (max-width: 480px) {
            .desktop-size{
                display: none;
            }
        }
        
        @media(min-width: 481px) and (max-width: 768px) {
            .desktop-size{
                font-size: 0.7em;
            }
        }
        
        p{
            text-overflow: ellipsis;
            overflow: hidden;
        }

        button{
            border: none;
            background-color: rgba(0, 0, 0, 0);
            color: red;
            font-size: 0.9em;
        }
    }
`;

//----------------------------------------------------//

export const Buttons = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 100px;
        margin-top: 50px;
    }
    
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

    @media (min-width: 320px) and (max-width: 480px) {
        button:nth-child(odd){
            width: 70px;
            height: 70px;
            margin: 0 20px;
            border-radius: 50%;

            p{
                display: none;
            }
        }
    }

    @media(min-width: 481px) and (max-width: 768px) {
        button:nth-child(odd){
            width: 70px;
            height: 70px;
            margin: 0 50px;
            border-radius: 50%;

            p{
                display: none;
            }
        }
    } 
    
  
`;

//----------------------------------------------------//

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

