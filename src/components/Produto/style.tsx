import styled from "styled-components";
import { CategoryName } from "../Categoria/style";


export const Container = styled.div`
    min-width: 155px;
    height: 189px;
    border-radius: 15.13px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Interativo = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ProductInfo = styled.div``;

export const ProductImage = styled.img`
    width: 136.08px;
    height: 126.74px;
    border-radius: 15.13px;
`;

export const ProductName = styled(CategoryName)``;

export const ProductPrice = styled(CategoryName)`
    font-weight: bold;
`;

export const Favorito = styled.svg`
    width: 22px;
    height: 19px;
    cursor: pointer;
`