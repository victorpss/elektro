import styled from "styled-components";
import { Icon } from "../HeaderHome/style";

interface sidebarProps {
    sidebar?: boolean;
}

export const Container = styled.nav<sidebarProps>`
    width: 220px;
    height: calc(100% - 68px); /* só para não ficar em cima do footer */
    background-color: #F5F5F5;
    top: 0px;
    left: 0px;
    position: fixed;
    z-index: 1;
    left: ${(props: sidebarProps) => (props.sidebar ? '0' : '-100%')};
    animation: showSidebar .5s;

    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 220px;
        }
    }
`;

export const UserSection = styled.div`
    width: 100%;
    height: 84px;
    background-color: #2B2B2B;
    display: flex;
    justify-content: start;
    align-items: center;
`;

export const UserIcon = styled(Icon)`
    width: 32px;
    height: 32px;
    padding-left: 18px;
`;

export const Username = styled.h4`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: white;
    margin-left: 28px;
`;

export const Options = styled.div`
    padding-left: 18px;
`;

export const OptionText = styled.h5`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #2B2B2B;
`;