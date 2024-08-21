import { useState } from "react";
import { Container, Content, InputField, Input, InputImage, LoginHeader, Logo, SetaIcon, Title, EsqueciSenha, Text, CadastreSe, EntrarComSocial, SocialButton } from "./style";

import { Button } from "../NaoLogado/style";
import { CustomLink } from "../../components/HeaderHome/style";

import setaIcon from "../../assets/icons/setaVoltar.png";
import logo from "../../assets/elektroLogo.png";
import emailIcon from "../../assets/icons/email.png";
import cadeadoIcon from "../../assets/icons/cadeado.png";
import olhoBarradoIcon from "../../assets/icons/olhoBarrado.png";
import olhoNaoBarradoIcon from "../../assets/icons/olhoNaoBarrado.png";
import facebookIcon from "../../assets/icons/facebookLogo.png";
import googleIcon from "../../assets/icons/googleLogo.png";

export default function Entrar() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Container>
            <LoginHeader>
                <CustomLink to="/naologado">
                    <SetaIcon src={setaIcon} alt="Seta para voltar" />
                </CustomLink>
                <Title>Entrar</Title>
            </LoginHeader>
            <Content>
                <Logo src={logo} alt="Logotipo do aplicativo" />
                <InputField>
                    <InputImage src={emailIcon} alt="Ícone de e-mail" />
                    <Input type="text" placeholder="Digite seu e-mail" />
                </InputField>

                <InputField>
                    <InputImage src={cadeadoIcon} alt="Ícone de cadeado" />
                    <Input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="*********"
                    />
                    <InputImage
                        src={passwordVisible ? olhoNaoBarradoIcon : olhoBarradoIcon}
                        alt="Ícone de olho"
                        onClick={togglePasswordVisibility}
                        style={{ cursor: 'pointer', right: '10px' }}
                    />
                </InputField>
                <EsqueciSenha>Esqueci minha senha</EsqueciSenha>
                
                <CustomLink to="/">
                    <Button>Entrar</Button>
                </CustomLink>

                <EntrarComSocial>
                    <CustomLink to="/">
                        <SocialButton>
                            <InputImage src={facebookIcon} alt="Ícone do Facebook"></InputImage>
                        </SocialButton>
                    </CustomLink>
                    <Text>ou</Text>
                    <CustomLink to="/">
                        <SocialButton>
                            <InputImage src={googleIcon} alt="Ícone do Google"></InputImage>
                        </SocialButton>
                    </CustomLink>

                </EntrarComSocial>
                <CadastreSe>Não possui cadastro? Cadastre-se!</CadastreSe>
            </Content>
        </Container>
    );
}
