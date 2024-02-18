import React from "react";
import styled from "styled-components";
import logoImg from "../image/logo.svg"
import signInImg from "../image/sign.svg"

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
`;
const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
    //align-items: center;
`;
const ImgLogo = styled.img`
    width: 50%;
`;
const Login = styled.button`
    font-family: Pacifico, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
    color: #fff;
    background: transparent;
    border: none;
    flex-shrink: 0;
`;
export const NavBar = () => {
   return (
       <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald's</H1>
        </Logo>
        <Login>
            <img src={signInImg} alt="signin"/>
            <p>Войти</p>
        </Login>
    </NavBarStyled>
   )
};