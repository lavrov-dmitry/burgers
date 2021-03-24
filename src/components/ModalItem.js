import React from 'react';
import styled from 'styled-components';

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
    margin-bottom: 20px;
    background-image: url(${(props) => props.img})
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
                { openItem.name }
            </Modal>
        </Overlay>
    )

}