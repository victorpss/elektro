import styled from "styled-components";


export const Container = styled.footer`
    width: 100%;
    height: 68px;
    background-color: #2B2B2B;
    position: fixed;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    bottom: 0;
`;

export const Option = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const OptionImage = styled.img`
    width: 24px;
    height: 24px;
`;

export const OptionText = styled.h5`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #DEDEDE;
    margin: 0;
`;
