import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const Item = styled.li`
    position: relative;
    width: 400px;
    height: 155px;
    background-image: ;
    background: ${(props) => `url(${props.img})`} center;
    background-size: cover;
    margin: 30px 0px 0px 30px;
    padding: 15px;
    color: #fff;
    font-size: 30px;
    z-index: 1;
    cursor: pointer;
    transition: all .3s;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: all .3s;
        background-color: #000;
        opacity: .5;
        z-index: -1;
    }

    &:hover {
        box-shadow: inset 0 0 50px 30px #000;
        &:after {
            opacity: 0;
        }
    }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
    <List>
        {itemList.map( item => (
            <Item 
                key={item.id} 
                img={item.img}
                onClick={() => setOpenItem(item)}
            >
            <p>{item.name}</p>
            <p>{item.price.toLocaleString('ru-RU',
            {style: 'currency', currency: 'RUB'})}</p>
            </Item>
        ))}
    </List>
)