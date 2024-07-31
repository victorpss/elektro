import styled from "styled-components";

interface textProps {
    fundoBranco?: boolean;
}

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    font-family: "Russo One", sans-serif;
    font-weight: 400;
    font-size: 32px;
    margin: 0;
`;

export const ErrorImage = styled.img`
    width: 280px;
    height: 208.63px;
    margin: 30px 0;
`;

export const Text = styled.p<textProps>`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => (props.fundoBranco ? "#2B2B2B" : "#F5F5F5")};
    text-align: center;
    margin: 16px 56px;
`;

export const Button = styled.button<textProps>`
    width: 188px;
    height: 40px;
    border-radius: 16px;
    border: 0;
    background-color: ${(props) => (props.fundoBranco ? "#F5F5F5" : "#2B2B2B")};
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => (props.fundoBranco ? "#2B2B2B" : "#F5F5F5")};
    margin: 8px 0;
    box-shadow: ${(props) => (props.fundoBranco ? "0px 4px 4px 0px rgba(0, 0, 0, 0.08)" : "none")};
    cursor: pointer;

    :hover {
        background-color: ${(props) => (props.fundoBranco ? "#DEDEDE" : "#1B1B1B")}; /* nao sei pq nao tá funcionando :( */
    }
`;