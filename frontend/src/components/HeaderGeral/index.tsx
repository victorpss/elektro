import { Container, Icon, HeaderText, Overlay } from "./style";
import sandwichIcon from "../../assets/icons/sandwichBarPreto.png";
import userIcon from "../../assets/icons/usuarioPesquisa.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "../SideBar";

export default function HeaderGeral({ text }: {text: string}) {
    const [sidebar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sidebar);
    const closeSideBar = () => setSideBar(false);

    return (
        <>
            <Container>
                <Icon src={sandwichIcon} onClick={showSideBar}></Icon>
                <HeaderText>{text}</HeaderText>
                <Link to="/naologado">
                    <Icon src={userIcon}></Icon>
                </Link>
            </Container>
            {sidebar && <Overlay onClick={closeSideBar} />}
            {sidebar && <SideBar closeSideBar={closeSideBar} />}
        </>
    );
}
