import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../ButtonCheckout';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
    position: fixed;
    left: 0;
    top: 80px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    min-width: 380px;
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

export const Order = ({orders}) => {

    return (
        <OrderStyled>
            <OrderTitle>Your order</OrderTitle>
            <OrderContent>
                {orders.length ?
                <OrderList>
                    {orders.map(order => <OrderListItem key={order.id} order={order}/>)}
                </OrderList>
                : <EmptyList>List is empty</EmptyList>}
            </OrderContent>
            <Total>
                <span>Total</span>
                <span>5</span>
                <TotalPrice>850R</TotalPrice>
            </Total>
            <ButtonCheckout>Make order</ButtonCheckout>
        </OrderStyled>
    )
}