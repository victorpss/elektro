import { Button, Container, ErrorImage, Text, Title } from "./style";

import errorImg from "../../assets/error.png"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function NaoLogado(){

    return (
        <Container>
            <Title>Opsss...</Title>
            <ErrorImage src={errorImg}></ErrorImage>
            <Text fundoBranco>Infelizmente, parece que você ainda não está logado</Text>
            <Link to="/entrar">
                <Button>
                    Cadastrar
                </Button>
            </Link>
            <Link to="/entrar">
                <Button fundoBranco>
                    Fazer login
                </Button>
            </Link>
            <Footer/>
        </Container>       
    );
}