import HeaderGeral from "../../components/HeaderGeral";
import { Avaliacao, CaracteristicasContainer, CaracteristicasItens, CaracteristicasTitulo, ClienteImage, ClienteInfo, ClienteNome, ComprarButton, Container, Content, Icon, Icons, Info, Item, ProdutoContainer, ProdutoImage, ProdutoInfo, ProdutoPreco, ProdutoTitulo } from "./style";

import celularImage from "../../assets/produtos/celularFull.png"
import favoritoIcon from "../../assets/icons/favoritoBranco.png";
import carrinhoIcon from "../../assets/icons/carrinhoBranco.png";
import clienteImage from "../../assets/cliente.png";
import avaliacao from "../../assets/estrelinhas.png"
import Footer from "../../components/Footer";
import { CustomLink } from "../../components/HeaderHome/style";

export default function Celular(){
    return (
        <Container>
            <HeaderGeral text="Produto"/>
            <Content>
                <ProdutoContainer>
                    <Icons>
                        <ProdutoImage src={celularImage}></ProdutoImage>
                        <Icon src={favoritoIcon}></Icon>
                        <Icon src={carrinhoIcon}></Icon>
                    </Icons>
                    <Info>
                        <ProdutoInfo>
                            <ProdutoTitulo>Celular</ProdutoTitulo>
                            <ProdutoPreco>R$ 800,00</ProdutoPreco>
                        </ProdutoInfo>
                        <ClienteInfo>
                            <ClienteImage src={clienteImage}></ClienteImage>
                            <ClienteNome>João Ribeiro</ClienteNome>
                            <Avaliacao src={avaliacao}></Avaliacao>
                        </ClienteInfo>
                    </Info>
                </ProdutoContainer>
                <CaracteristicasContainer>
                    <CaracteristicasTitulo>
                        Características do Produto
                    </CaracteristicasTitulo>
                    <CaracteristicasItens>
                        <Item>Tela Super Retina de 6,1";</Item>
                        <Item>Chip biônico A15 p/ desempenho + rápido;</Item>
                        <Item>Sistema avançado de câmera dupla;</Item>
                        <Item>Câmera frontal TrueDepth de 12MP, com modo noturno e gravação 4K Dolby Vision.</Item>
                    </CaracteristicasItens>
                </CaracteristicasContainer>
                <CustomLink to="/entrar">
                    <ComprarButton>Comprar</ComprarButton>
                </CustomLink>
            </Content>
            <Footer/>
        </Container>      

    );
}