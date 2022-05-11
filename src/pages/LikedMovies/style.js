import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #fff;
    font-family: sans-serif;
    font-size: 0.9em;
    text-transform: uppercase;

    .loading{
        border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        width: 100%;
    }

    .title{
        display: flex;
        align-items: center;
        margin: 50px 0 0 200px;
        height: 100px;
    }
`;

export const EmptyMovie = styled.div`
    .noMovie{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1{
            margin: 50px 0;
        }
    }
`;

export const HasMovies = styled.div`
    display: grid;
    grid-gap: 100px;
    grid-template-columns: repeat(3, 1fr);   
`;

export const Card = styled.div`
    margin: auto;
    border: 1px solid red;
    height: 350px;
    width: 320px;
`;