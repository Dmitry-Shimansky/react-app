import React from "react";
import styled from "styled-components";
import logoImg from "../image/logo.svg"

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
const LoginButton = styled.button`
    font-size: 1rem;
    font-weight: 600;
    line-height: 160%;
    color: #fff;
    background: #3a71d1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5625rem 3.75rem;
    border: none;
    flex-shrink: 0;
    cursor: pointer;
`;
export const NavBar = () => {
   return (
       <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald's</H1>
        </Logo>
        <LoginButton>Войти</LoginButton>
    </NavBarStyled>
   )
};