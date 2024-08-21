import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 71px;
    background-color: #2B2B2B; 
    border-radius: 0 0 20px 20px; 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

export const PesquisaButton = styled.button`
    width: 257px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    border: 0;
    gap: 4px;
`;

export const PesquisaText = styled.h5`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
`;
