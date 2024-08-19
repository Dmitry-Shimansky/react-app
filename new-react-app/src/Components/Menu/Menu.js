import React from "react";
import styled from "styled-components";
// import dbMenu from "../DBMenu";
import {ListItem} from "./ListItem";
import {Banner} from "./Banner";
import {useFetch} from "../Hooks/useFetch";
import preloader from "../../image/Spinner.svg";
import sww from "../../image/somethingwentwrong.png";

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const Preloader = styled.div`
    width: 100%;
    height: calc(100vh - 280px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${preloader});
    background-position: center;
    background-repeat: no-repeat;
    background-color: #ccc;
`;

const OopsImgWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 280px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

const OopsImg = styled.img`
    
`;

export const Menu = () => {

    const res = useFetch();
    const dbMenu = res.response;

    return (
        <MenuStyled>
            <Banner/>
            {res.response ?
                <>
                    <SectionMenu>
                        <h2>Бургеры</h2>
                        <ListItem
                            itemList={dbMenu.burger}
                        />
                    </SectionMenu>
                    <SectionMenu>
                        <h2>Закуски / Напитки</h2>
                        <ListItem
                            itemList={dbMenu.other}
                        />
                    </SectionMenu>
                </> : res.error ?
                    <OopsImgWrapper>
                        <OopsImg src={sww} alt="OOPS!"/>
                    </OopsImgWrapper> :
                <Preloader/>
            }
        </MenuStyled>
    )
};