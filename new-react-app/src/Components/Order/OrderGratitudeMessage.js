import React, {useContext} from 'react';
import styled from 'styled-components';
import {Context} from "../Functions/context";
import {Overlay} from "../Style/OverlayStyle";

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    padding: 30px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
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