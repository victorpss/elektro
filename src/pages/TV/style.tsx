import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
    overflow-x: hidden;
`;

export const TVsDisplay = styled.section`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 16px;
    column-gap: 12px;
`;

export const PesquisaContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`;

export const PesquisaInputField = styled.div`
    width: 257px;
    height: 40px;
    background-color: #2B2B2B;
    border-radius: 16px;
    display: flex;
    align-items: center;
    position: relative;
`;

export const PesquisaIcon = styled.img`
    position: absolute;
    left: 10px;
    width: 20px;
    height: 20px;
`;

export const PesquisaInput = styled.input`
    width: 100%;
    height: 96%;
    background-color: transparent;
    color: #F5F5F5;
    border: 0;
    border-radius: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    padding-left: 34px;
`;

export const Filtro = styled.img`
    width: 57px;
    height: 55px;
    cursor: pointer;
`;