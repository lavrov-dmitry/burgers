import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction'
import { formatCurrency } from '../Functions/secondaryFunction'

const OrderStyled = styled.section`
    position: fixed;
    left: 0;
    top: 80px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    max-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0,0,0,.25);
    padding: 20px;
`;

const OrderTitle = styled.h2 `
    text-align: center;
    margin-botom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
    display: flex;
    margin: 0px 35px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

export const Order = ({orders, setOrders, setOpenItem}) => {

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0)

    const totalCounter = orders.reduce((result, order) => order.count + result, 0)

    return (
        <OrderStyled>
            <OrderTitle>Your order</OrderTitle>
            <OrderContent>
                {orders.length ?
                <OrderList>
                    {orders.map((order, index) => <OrderListItem
                        key={index}
                        order={order}
                        deleteItem={deleteItem}
                        index={index}
                        setOpenItem={setOpenItem}
                        />)}
                </OrderList>
                : <EmptyList>List is empty</EmptyList>}
            </OrderContent>
            <Total>
                <span>Total</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout>Make order</ButtonCheckout>
        </OrderStyled>
    )
}