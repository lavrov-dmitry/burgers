import React from 'react';
import styled from 'styled-components';
import { totalPriceItems } from '../Modal/ModalItem'
import trash from '../../image/trash.svg'

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background: url(${trash}) center no-repeat;
    background-size: cover;
    cursor: pointer;
`;

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin: 0px 20px 0px 10px;
    min-width: 65px;
    text-align: right;
`;

export const OrderListItem = ({order}) => (
    <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{totalPriceItems(order).toLocaleString('ru-RU',
        {style: 'currency', currency: 'RUB'})}</ItemPrice>
        <TrashButton/>
    </OrderItemStyled>
)