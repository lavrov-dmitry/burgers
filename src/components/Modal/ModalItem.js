import React from 'react';
import styled from 'styled-components';
import { useCount } from '../hooks/useCount';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { CountItem } from './CountItem';
import { totalPriceItems } from '../Functions/secondaryFunction'
import { formatCurrency } from '../Functions/secondaryFunction'
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../hooks/useToppings';
import { useCoices } from '../hooks/useChoices';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: rgba(0,0,0,.4);
    z-index: 20;
`;

const Modal = styled.div`
    background-color: #fff;
    height: 600px;
    width 600px;
`;

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-color: #000;
    background-size: cover;
    background-position: center;
    background-image: url(${(props) => props.img})
`;

const Content = styled.section`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px)
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Pacifico', cursive;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount(openItem.count);
    const toppings = useToppings(openItem);
    const choices = useCoices(openItem);

    const isEdit = openItem.index > -1;

    const closeModal = e => {
        if ( e.target.id === 'overlay' ) {
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    }


    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }


    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={ openItem.img }/>
                <Content>
                    <HeaderContent>
                        <div>{ openItem.name }</div>
                        <div>{ formatCurrency(openItem.price) }</div>
                    </HeaderContent>
                    <CountItem {...counter}/>
                    {openItem.toppings && <Toppings {...toppings}/>}
                    {openItem.choices && <Choices {...choices} openItem={openItem}/>}
                    <TotalPriceItem>
                        <span>Price:</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <ButtonCheckout 
                        onClick={isEdit ? editOrder : addToOrder}
                        disabled={order.choices && !order.choice}
                        >{isEdit ? '??????????????????????????' : '????????????????'}
                    </ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    )

}