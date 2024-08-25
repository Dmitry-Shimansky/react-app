import React, {useContext} from "react";
import styled from "styled-components";
import {ButtonCheckout} from "../Style/ButtonCheckout";
import {Overlay} from "../Style/OverlayStyle";
import {CountItem} from "./CountItem";
import {useCount} from "../Hooks/useCount";
import {formatCurrency} from "../Functions/secondaryFunction";
import {totalPriceItems} from "../Functions/secondaryFunction";
import {Toppings} from "./Toppings";
import {Choices} from "./Choices";
import {useToppings} from "../Hooks/useToppings";
import {useChoices} from "../Hooks/useChoices";
import {Context} from "../Functions/context";

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px;
    box-shadow: 0 0 5px 10px rgba(46, 204, 113, 0.2);
    border-radius: 10px;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
    padding: 30px;
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

const SeparateLine = styled.hr`
    color: black;
    width: 100%;
    height: 1px;
`;

export const ModalItem = () => {

    const {
        openItem: {openItem, setOpenItem},
        orders: {orders, setOrders}
    } = useContext(Context);

    const counter = useCount(openItem.count);
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;

    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    }

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <div>{formatCurrency(openItem.price)}</div>
                    </HeaderContent>
                    <CountItem {...counter}/>
                    <SeparateLine/>
                    {openItem.toppings && <Toppings{...toppings}/>}
                    {openItem.choices && <Choices {...choices} openItem={openItem} />}
                    <SeparateLine/>
                    <TotalPriceItem>
                        <span>Цена:</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <ButtonCheckout
                        onClick={isEdit ? editOrder : addToOrder}
                        disabled={order.choices && !order.choice}
                    >{isEdit ? 'Редактировать' : 'Добавить'}
                    </ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    )
}