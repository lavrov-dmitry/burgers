import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    display: grid;
    place-items: center;
    margin: 0 auto;
    width: 250px;
    height: 65px;
    font-size: inherit;
    font-family: inherit;
    background-color: #299b01;
    color: #fff;
    border-color: transparent;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: #fff;
        color: #299b01;
        border-color: #299b01;
    }
`;