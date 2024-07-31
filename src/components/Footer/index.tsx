import { Container, Option, OptionImage, OptionText } from "./style";
import { Link } from "react-router-dom";

import homeIcon from "../../assets/icons/home.png"
import chatIcon from "../../assets/icons/chatBranco.png"
import avisosIcon from "../../assets/icons/avisos.png"
import perfilIcon from "../../assets/icons/perfil.png"

export default function Footer(){
    return (
        <Container>
            <Option>
                <Link to="/">
                    <OptionImage src={homeIcon}></OptionImage>
                </Link>
                <OptionText>Home</OptionText>
            </Option>
            <Option>
                <Link to="/naologado">
                    <OptionImage src={chatIcon}></OptionImage>
                </Link>
                <OptionText>Chat</OptionText>
            </Option>
            <Option>
                <Link to="/naologado">
                    <OptionImage src={avisosIcon}></OptionImage>
                </Link>
                <OptionText>Avisos</OptionText>
            </Option>
            <Option>
                <Link to="/naologado">
                    <OptionImage src={perfilIcon}></OptionImage>
                </Link>
                <OptionText>Perfil</OptionText>
            </Option>

        </Container>

    );
}