import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #fff;
    font-family: sans-serif;
    font-size: 0.9em;
    border-bottom: 10px solid red;

    
    .title{
        display: flex;
        align-items: center;
        margin: 50px 0 0 200px;
        height: 100px;
        text-transform: uppercase;
        @media (max-width: 480px) {
            margin-left: 5px;
            font-size: 0.9em;
        }
    }

    .loading{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        width: 100%;
        text-transform: uppercase;
    }
    `;

export const EmptyMovie = styled.div`
    .noMovie{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-transform: uppercase;

        h1{
            margin: 50px 0;
        }
    }
`;

export const HasMovies = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
    
    .likedMovies{
        display: grid;
        grid-gap: 40px;
        column-gap: 0px;
        grid-template-columns: auto auto auto;  
        width: 80%;

        @media (max-width: 480px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
        }
    }
`;

export const Card = styled.div`
    margin: auto;
    width: 320px;
    height: 394px;
    background-size:  320px 394px;
    background-repeat: no-repeat;
    
    @media (max-width:480px) {
        width: 170px;
        height: 214px;
        background-size: 170px 214px ;
    }
    
    &:hover{
        transition: all 2s;
        transform: scale(1.1);
    }

    .gradient-effect{
        height: 100%;
        width: 100%;
        display: flex;
        background: rgb(253,253,255);
        background: linear-gradient(0deg, rgba(253,253,255,0.31726193895526966) 0%, rgba(255,255,255,0) 0%);
    }
`;

export const About = styled.div`    
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: end;
    opacity: 0.5;
    
    &:hover{
        transition: all 1s;
        opacity: 1;
    }
    
    
    .movie-about{
        background-color: #000000;
        display: flex;
        flex-direction: column;
        height: 35%;
        justify-content: space-between;
        padding: 20px;

        @media (max-width: 480px) {
            padding: 15px;
        }
    }
    
    .movie-tittle{
        
        @media (max-width: 480px) {
            font-size: 0.5em;
        }

        h2{
            font-size: 1.6em;
        }

    }
    
    .movie-datas{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        .movie-heart{
            color: rgba(255, 86, 86, 0.9);
            @media (max-width: 480px) {
                width: 100%;
                display: flex;
                justify-content: space-evenly;

                svg{
                    width: 20px;
                    height: 20px;
                }
            }
        }
        
        svg{
            width: 15px;
            height: 15px;
        }

        svg:nth-child(5){
            color: #fff;
            font-size: 2.5em;
        }
        
        .movie-rating{
            font-size: 0.9em;

            @media (max-width:480px) {
                display: none;
            }
        }
    }
    
    .movie-sinopse{  

        @media (max-width: 480px) {
                display: none;
        }

        p{
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 0.9em;
        }

        button{
            border: none;
            background-color: rgba(0, 0, 0, 0);
            color: red;
            font-size: 1.1em;
        }
    }
`;