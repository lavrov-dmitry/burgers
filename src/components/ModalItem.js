import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from './ButtonCheckout';

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

export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e) {
        if ( e.target.id === 'overlay' ) {
            setOpenItem(null);
        }
    }

    if ( !openItem ) return null
    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={ openItem.img }/>
                <Content>
                    <HeaderContent>
                        <div>{ openItem.name }</div>
                        <div>{ openItem.price }</div>
                    </HeaderContent>
                    <ButtonCheckout>Добавить</ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    )

}