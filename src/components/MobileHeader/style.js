import styled from "styled-components";

//------------------------------------------------------//

export const Container = styled.div`
    height: 100vh;
    min-width: 85%;
    background-color: black;
    color: white;
    position: fixed;
    top: 0;
    align-items: center;
    justify-content: center;
    z-index: 0;
    display: flex;
    @media (min-width: 769px) {
        display: none;
    }
`;

//------------------------------------------------------//

export const MenuMobile = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    li{
        margin: 50px 0;
    }

    .btn-exit{
        position: fixed;
        top: 40px;
        left: 30px;
        cursor: pointer;

        svg{
            height: 45px;
            width: 45px;
            background-color: rgba(255, 86, 86, 0.9);
            padding: 5px;
        }
    }

        a{
            text-transform: uppercase;
            font-family: monospace;
            font-size: 1.2em;
            font-weight: bolder;
        }
        
        .link {
            color: white;
        }
        
        .link-active {
            color: white;
            border-bottom: 5px solid white;
        }
        
        .content {
            text-align: center;
        }
`;
