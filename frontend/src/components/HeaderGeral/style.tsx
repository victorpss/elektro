import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 71px;
    background-color: #F5F5F5; 
    border-bottom: 1.5px solid #B9B9B9; 
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 0;
    position: fixed;
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

export const HeaderText = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 24px;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
`;
