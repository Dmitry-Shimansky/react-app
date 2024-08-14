import React, {useContext} from "react";
import styled from "styled-components";
// import dbMenu from "../DBMenu";
import {ListItem} from "./ListItem";
import {Banner} from "./Banner";
import {useFetch} from "../Hooks/useFetch";
import preloader from "../../image/Spinner.svg"
import {Context} from "../Functions/context";

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const PreloaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: purple;
`;

const PreloaderImg = styled.img`
    width: 200px;
    height: 200px;
`;

export const Menu = () => {

    const {openItem: {setOpenItem}} = useContext(Context);
    const res = useFetch();
    const dbMenu = res.response;
    // console.log('useFetch', useFetch());

    return (
        <MenuStyled>
            <Banner/>
            {res.response ?
                <>
                    <SectionMenu>
                        <h2>Бургеры</h2>
                        <ListItem
                            itemList={dbMenu.burger}
                            setOpenItem={setOpenItem}
                        />
                    </SectionMenu>
                    <SectionMenu>
                        <h2>Закуски / Напитки</h2>
                        <ListItem
                            itemList={dbMenu.other}
                            setOpenItem={setOpenItem}
                        />
                    </SectionMenu>
                </> : res.error ? <div>Sorry, we will fix it soon</div> :
                <PreloaderWrapper>
                    <PreloaderImg src={preloader} alt="Preloader"/>
                </PreloaderWrapper>
                // <div>Loading...</div>
            }
        </MenuStyled>
    )
};