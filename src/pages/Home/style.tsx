import styled from "styled-components";

interface ellipseProps {
    full?: boolean;
}

export const Container = styled.div`
    max-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
    overflow-x: hidden;
`;

export const LogoImage = styled.img`
    width: 42px;
    height: 42px;
`;

export const HomeTitle = styled.h1`
    font-family: "Russo One", sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #FF8F0E;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`;

export const HomeImage = styled.img`

`;

export const Options = styled.div`
    display:flex;
    gap: 8px;
    margin: 7px 0 20px 0;
`;

export const Ellipse = styled.div<ellipseProps>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props: ellipseProps) => (props.full ? "#2B2B2B" : "#DEDEDE")};
`;

export const ProductsSection = styled.section`
    width: 90%;
`;

export const SectionTitle = styled.h4`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
`;

export const CategoriasDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 1em;
`;

export const ProdutosDisplay = styled.div`
    display: flex;
    gap: 20px;
    overflow-x: auto;
    white-space: nowrap;
    padding: 20px 0;
    scroll-snap-type: x mandatory;
`

export const FollowUs = styled.div`
    width: 100%;
    height: 330px;
    background-color: #FFAE50;
    bottom: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
`;

export const SocialRow = styled.div`
    display: flex;
    gap: 8px;
    padding: 13px 0;
`;

export const SocialIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;