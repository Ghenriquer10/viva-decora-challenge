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
    }

    .loading{
        border: 1px solid red;
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
        grid-gap: 20px;
        grid-column-gap: 5px;
        grid-template-columns: auto auto auto;  
        width: 90%;
    }
`;

export const Card = styled.div`
    margin: auto;
    width: 420px;
    height: 294px;
    background-size:  420px 294px;
    background-repeat: no-repeat;
    
    &:hover{
        transition: all 2s;
        transform: scale(1.1);
    }

    .gradient-effect{
        height: 100%;
        width: 100%;
        display: flex;
        background: rgb(253,253,255);
        background: linear-gradient(0deg, rgba(253,253,255,0.31726193895526966) 5%, rgba(255,255,255,0) 50%);
    }
`;

export const About = styled.div`    
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: end;


    .movie-about{
        margin-bottom: 20px;
        margin: 20px;
        display: flex;
        flex-direction: column;
        height: 35%;
        justify-content: space-between;
    }
    
    .movie-tittle{        
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
        }
        
        svg{
            width: 20px;
            height: 20px;
        }

        svg:nth-child(5){
            color: #fff;
            font-size: 2.5em;
        }
        
        .movie-rating{
            font-size: 1.1em;
        }
    }
    
    .movie-sinopse{  
        display: flex;
        p{
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 1.1em;
        }

        button{
            border: none;
            background-color: rgba(0, 0, 0, 0);
            color: red;
            font-size: 1.1em;
        }
    }
`;