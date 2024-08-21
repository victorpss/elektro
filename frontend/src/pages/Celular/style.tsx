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

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProdutoContainer = styled.section`
    width: 100%;
    height: calc(326+71)px;
    padding-top: 71px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2B2B2B;
    border-radius: 0 0 20px 20px;
    flex-direction: column;
`;


export const ProdutoImage = styled.img`
    width: 228px;
    height: 206px;
`;

export const Icons = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: start;
    gap: 4px;
    padding: 12px 0 21px 6%;

`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

export const Info = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-around;
    margin-bottom: 15px;
`;

export const ProdutoInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 12px;
`

export const ProdutoTitulo = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #F5F5F5;
    margin: 0;
`;

export const ProdutoPreco = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #F5F5F5;
    margin: 0;
`;

export const ClienteInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: end;
    gap: 6px;
`;

export const ClienteImage = styled.img`
    width: 56px;
    height: 56px;
`;

export const ClienteNome = styled.h2`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #F5F5F5;
    margin: 0;
`;

export const Avaliacao = styled.img`
    width: 137.26px;
    height: 24px;
`;

export const CaracteristicasContainer = styled.div`
    width: 82%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    margin-bottom: 12px;
`;

export const CaracteristicasTitulo = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #2B2B2B;
    margin: 0;
    text-align: center;
`;


export const CaracteristicasItens = styled.ul`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 14px;
    padding: 0;
`;

export const Item = styled.li`
    &::marker {
        font-size: 0.5em; 
        color: #2B2B2B; 
    }
`;

export const ComprarButton = styled.button`
    width: 188px;
    height: 40px;
    border-radius: 16px;
    border: 0;
    background-color: #2B2B2B;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #F5F5F5;
    cursor: pointer;
`;