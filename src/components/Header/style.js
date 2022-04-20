import styled from "styled-components";

export const Container = styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
    background-color: red;
    background-color: rgba(225, 225, 225, 0.5);

    nav {
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #3f51b5;
        box-shadow: 0 5px 10px #ccc;
    }

    /* Basic styles for nav links */
    nav a {
        display: flex;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
        height: 100%;
        text-decoration: none;
    }

    /* Specific styles for non-active links */
    .link {
        color: white;
    }

    /* Specific styles for active links */
    .link-active {
        color: black;
        background: orange;
    }

    .content {
        margin-top: 50px;
        text-align: center;
    }

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
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;