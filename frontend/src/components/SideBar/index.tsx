import { Container, UserSection, UserIcon, Username, Options, OptionText } from "./style";

import userIcon from "../../assets/icons/usuario.png"
import Divisor from "../Divisor";
import { CustomLink } from "../HeaderHome/style";

interface SideBarProps {
    closeSideBar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ closeSideBar }) => {
    return (
        <Container sidebar={true}>
                <UserSection>
                    <CustomLink to="/naologado">
                        <UserIcon src={userIcon} alt="Ícone de usuário"></UserIcon>
                    </CustomLink>
                    <Username>Usuário</Username>
                </UserSection>
            <Options>
                <CustomLink to="/naologado">
                    <OptionText>
                        Editar dados
                    </OptionText>                
                </CustomLink>
                <Divisor width={90}></Divisor>
                <CustomLink to="/naologado">
                    <OptionText>
                        Meus pedidos
                    </OptionText>                
                </CustomLink>
                <Divisor width={90}></Divisor>
                <CustomLink to="/naologado">
                    <OptionText>
                        Meus produtos
                    </OptionText>                
                </CustomLink>
                <Divisor width={90}></Divisor>
                <CustomLink to="/naologado">
                    <OptionText>
                        Meu carrinho
                    </OptionText>                
                </CustomLink>
            </Options>
        </Container>
    );
}

export default SideBar;
