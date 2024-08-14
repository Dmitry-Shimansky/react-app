import React from 'react';
import styled from 'styled-components';
import {Overlay} from "../Modal/ModalItem";
import {OrderTitle, Total, TotalPrice } from "./Order";
import {ButtonCheckout} from "../Style/ButtonCheckout";
import {totalPriceItems, formatCurrency, projection} from "../Functions/secondaryFunction";

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    padding: 30px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', item => item.filter(obj => obj.checked).map(obj => obj.name),
        arr => arr.length ? arr : 'no toppings'],
    choice: ['choice', item => item ? item : 'no choices'],
}

const sendOrders = (dataBase, orders, authentication) => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
        nameClient: authentication.displayName,
        email: authentication.email,
        order: newOrder
    }).catch((err) => console.error('Error ', err.message));
};

export const OrderConfirm = ({orders, setOrders, authentication, firebaseDatabase, setOpenOrderConfirm}) => {

    const dataBase = firebaseDatabase();
    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

    return (
        <Overlay>
            <Modal>
                <OrderTitle>{authentication.displayName}</OrderTitle>
                <Text>Осталось подтвердить заказ</Text>
                <Total>
                    <span>Итого</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <ButtonCheckout onClick={()=> {
                    sendOrders(dataBase, orders, authentication, setOrders);
                    setOrders([]);
                    setOpenOrderConfirm(false);
                }}>Подтвердить</ButtonCheckout>
            </Modal>
        </Overlay>
    )
}