import styled from "styled-components";

interface divisorProps{
    width: number;
}

export const Linha = styled.div<divisorProps>`
    width: ${(props: divisorProps) => (props.width)}%;
    height: 1px;
    background-color: #B9B9B9;
`;