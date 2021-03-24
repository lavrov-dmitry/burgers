import React from 'react';
import styled from 'styled-components';
import { Banner } from '../Banner';
import dbMenu from '../DBMenu'
import { ListItem } from './ListItem';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin: 80px 0px 0px 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;


export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem
                itemList={dbMenu.burger}
                setOpenItem={ setOpenItem }
            />
        </SectionMenu>

        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem
                itemList={dbMenu.other}
                setOpenItem={ setOpenItem }
            />
        </SectionMenu>
    </MenuStyled>
);