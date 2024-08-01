import styled from "styled-components";

interface textProps{
    selecionado?: boolean;
}

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
    overflow-x: hidden;
`

export const Content = styled.section`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 100px;
`;

export const Historico = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Pesquisado = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
`;

export const Text = styled.h2<textProps>`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => (props.selecionado? "#0271A0" : "#2B2B2B")};
    text-decoration: ${(props) => (props.selecionado? "underline" : "none")};
    margin: ${(props) => (props.selecionado? 20 : 0)};
`;

export const Button = styled.button`
    width: 190px;
    height: 37px;
    border: 0;
    border-radius: 16px;
    background-color: #2B2B2B;
    color: #F5F5F5;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 10px;
    margin: 15px 100px 15px 0;
`;

export const Sugestoes = styled.div`
`;

export const Sugestao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0px;
    gap: 20px;
`;

export const SugestaoImage = styled.img`
    width: 80px;
    height: 72px;
`;

export const SugestaoButton = styled.button`
    width: 188px;
    height: 40px;
    border-radius: 16px;
    color: #2B2B2B;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    background-color: #F5F5F5;
    border: 0;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.08);
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: #DEDEDE;
    }
`;