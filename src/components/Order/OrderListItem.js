import React, { useRef } from 'react';
import styled from 'styled-components';
import { totalPriceItems } from '../Functions/secondaryFunction'
import { formatCurrency } from '../Functions/secondaryFunction'
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
    flex-wrap: wrap;
    cursor: pointer;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin: 0px 20px 0px 10px;
    min-width: 65px;
    text-align: right;
`;

const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 14px;
    width: 100%;
`;

export const OrderListItem = ({order, deleteItem, index, setOpenItem}) =>  {
    
    const topping = order.topping.filter(item=> item.checked)
        .map(item => item.name)
        .join(', ')

    const refDeleteButton = useRef(null)

    return (
    <OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
        <ItemName>{order.name} {order.choice}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
        <TrashButton ref={refDeleteButton}  onClick={() => deleteItem(index)}/>
        {topping && <Toppings>Toppings: {topping}</Toppings>}
    </OrderItemStyled>
)}