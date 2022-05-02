import styled from "styled-components";

export const Container = styled.div`
    height: 150px;
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
    
    .menu{
        height: 50%;
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .menu a{
        text-transform: uppercase;
        font-family: monospace;
        font-size: 1.2em;
    }
      
    /* Specific styles for non-active links */
    .link {
        color: white;
        opacity: 0.6;
    }
    
    /* Specific styles for active links */
    .link-active {
        color: white;
        border-bottom: 5px solid white;
    }

    .content {
        text-align: center;
    }


`;