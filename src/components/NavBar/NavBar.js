import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signinImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299b01;
    color: #fff;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const LogIn = styled.button`
    background-color: transparent;
    border-color: transparent;
    color: #fff;
    gont-size: 16px;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
`;

const LogOut = styled.span`
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    margin-right: 30px;
`;

const Figure = styled.figure`
    margin: 0px 30px;
`;


export const NavBar = ({ authentification, logIn, logOut }) => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>Dadlee burgers</H1>
        </Logo>
        {authentification ? 
            <User>
                <Figure>
                 <img src={signinImg} alt={authentification.displayName}/>
                 <figcaption>{authentification.displayName}</figcaption>
                </Figure>
                <LogOut 
                    title="log out"
                    onClick={logOut}
                >X</LogOut>
            </User>
            : <LogIn onClick={logIn}>
                <Figure>
                <img src={signinImg} alt='signin'/>
                <figcaption>Log in</figcaption>
                </Figure>
            </LogIn>
          }
    </NavBarStyled>
)