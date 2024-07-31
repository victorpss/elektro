import { Container, CustomLink, Icon, PesquisaButton, PesquisaText, Overlay } from "./style";
import sandwichIcon from "../../assets/icons/sandwichBar.png";
import carrinhoIcon from "../../assets/icons/carrinhoCompras.png";
import lupaIcon from "../../assets/icons/lupa.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "../SideBar";

export default function HeaderHome() {
    const [sidebar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sidebar);
    const closeSideBar = () => setSideBar(false);

    return (
        <>
            <Container>
                <Icon src={sandwichIcon} onClick={showSideBar}></Icon>
                <CustomLink to="/pesquisa">
                    <PesquisaButton>
                        <Icon src={lupaIcon}></Icon>
                        <PesquisaText>Encontrar na Elektro</PesquisaText>
                    </PesquisaButton>
                </CustomLink>
                <Link to="/naologado">
                    <Icon src={carrinhoIcon}></Icon>
                </Link>
            </Container>
            {sidebar && <Overlay onClick={closeSideBar} />}
            {sidebar && <SideBar closeSideBar={closeSideBar} />}
        </>
    );
}
