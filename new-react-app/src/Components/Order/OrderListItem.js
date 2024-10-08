import React, {useRef, useContext} from "react";
import styled from "styled-components";
import trashImage from "../../image/trash.svg"
import {totalPriceItems, formatCurrency} from "../Functions/secondaryFunction";
import {Context} from "../Functions/context";

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`;

const ItemName = styled.span`
    flex-grow: 1;
    cursor: pointer
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer
`;

const Toppings = styled.p`
    margin: 0;
    color: #9a9a9a;
    font-size: 14px;
`;

export const OrderListItem = ({order, deleteItem, index}) => {

    const {openItem: {setOpenItem}} = useContext(Context);
    const checkedToppings =  order.topping.filter(item => item.checked).map(item => item.name).join(', ');
    const refDeleteButton = useRef(null);

    return (
        <>
            <OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
                <ItemName>{order.name} {order.choice}</ItemName>
                <span>{order.count}</span>
                <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
                <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)}/>
            </OrderItemStyled>
            {checkedToppings && <Toppings>Допы: {checkedToppings}</Toppings>}
        </>
    )
};