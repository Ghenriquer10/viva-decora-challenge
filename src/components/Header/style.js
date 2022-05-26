import styled from "styled-components";

export const Container = styled.div`
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: rgba(ff5656, 0, 0, 1);
    
    .logo{
        height: 90%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        img{
            height: 38px;
            width: 165px;
        }
    }
`;

export const MenuMobile = styled.div`
    position: absolute;
    left: 30px;
    cursor: pointer;

    svg{
        height: 30px;
        width: 30px;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

export const MenuDesktop = styled.div`
    height: 50%;
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
        @media (min-width: 320px) and (max-width: 768px) {
            display: none;
    
        }

        a{
            text-transform: uppercase;
            font-family: monospace;
            font-size: 0.9em;
        }
        
        .link {
            color: white;
            opacity: 0.6;
        }
        
        .link-active {
            color: white;
            border-bottom: 5px solid white;
        }
        
        .content {
            text-align: center;
        }

        @media (min-width: 481px) and (max-width: 768px) {
            a{
                text-transform: uppercase;
                font-family: monospace;
                font-size: 0.9em;
                margin: 0 50px;
            }
        }
`;