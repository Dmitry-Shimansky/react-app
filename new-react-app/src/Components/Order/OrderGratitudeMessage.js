import React, {useContext} from 'react';
import styled from 'styled-components';
import {Context} from "../Functions/context";
import {Overlay} from "../Style/OverlayStyle";

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    padding: 30px;
    box-shadow: 0 0 5px 10px rgba(46, 204, 113, 0.2);
    border-radius: 10px;
`;

const Text = styled.h3`
    font-size: 40px;
    text-align: center;
`;

export const OrderGratitudeMessage = () => {

    const {thanksMessage: {setThanksMessage}} = useContext(Context);

    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setThanksMessage(false);
        }
    }

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Text>Спасибо за заказ!</Text>
            </Modal>
        </Overlay>
    )
}