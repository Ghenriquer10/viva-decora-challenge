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
    `;

export const CardDetail = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0) 80%, rgba(255, 86, 86, 1) 80%);    
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .image-sinopse{
        height: 120px;
        width: 100px;
        margin-top: 30px;

        img{
            height: 120px;
            width: 100px;
        }
    }
`;

