import styled from "styled-components";

export const Container = styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: rgba(225, 225, 225, 0.5);
    
    .logo{
        height: 50%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    
        img{
            height: 300px;
            width: 300px;
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
        padding: 10px;
    }
      
    /* Specific styles for non-active links */
    .link {
        color: white;
    }
    
    /* Specific styles for active links */
    .link-active {
        color: white;
        border-bottom: 3px solid white;
    }

    .content {
        margin-top: 50px;
        text-align: center;
    }


`;