import Footer from "../../components/Footer";
import HeaderGeral from "../../components/HeaderGeral";
import { Filtro, PesquisaContainer, PesquisaIcon, PesquisaInput, PesquisaInputField } from "../TV/style";
import { Button, Container, Content, Historico, Pesquisado, Sugestao, SugestaoButton, SugestaoImage, Sugestoes, Text } from "./style";
import { Icon } from "../../components/HeaderGeral/style";
import { CustomLink } from "../../components/HeaderHome/style";

import lupaIcon from "../../assets/icons/lupaCinza.png";
import gFiltroIcon from "../../assets/icons/gFiltro.png";
import Divisor from "../../components/Divisor";
import apagarIcon from "../../assets/icons/apagar.png";

import celularesImg from "../../assets/sugestoes/sugestaoCelulares.png";
import tecladosImg from "../../assets/sugestoes/sugestaoTeclados.png";
import monitoresImg from "../../assets/sugestoes/sugestaoMonitores.png";


export default function Pesquisa(){
    return (
        <Container>
            <HeaderGeral text="Pesquisa"/>
            <Content>
                <PesquisaContainer>
                    <PesquisaInputField>
                        <PesquisaIcon src={lupaIcon} />
                        <PesquisaInput type="text" placeholder="Encontrar na Elektro"/>
                    </PesquisaInputField>
                    <Filtro src={gFiltroIcon}></Filtro>
                </PesquisaContainer>
                    <Historico>
                        <Pesquisado>
                            <Text>Monitor</Text>
                            <Icon src={apagarIcon}></Icon>
                        </Pesquisado>
                        <Pesquisado>
                            <CustomLink to="/tv">
                                <Text>Smart TV</Text>
                            </CustomLink>
                            <Icon src={apagarIcon}></Icon>
                        </Pesquisado>
                        <Pesquisado>
                            <Text>Mousepad</Text>
                            <Icon src={apagarIcon}></Icon>
                        </Pesquisado>
                    </Historico>
                    <Divisor width={90}></Divisor>
                    <Text selecionado>Apagar Histórico de Pesquisa</Text>
                    <Button>Sugestão de busca</Button>
                    <Sugestoes>
                        <Sugestao>
                            <SugestaoImage src={celularesImg}></SugestaoImage>
                            <SugestaoButton>Celulares</SugestaoButton>
                        </Sugestao>
                        <Sugestao>
                            <SugestaoImage src={tecladosImg}></SugestaoImage>
                            <SugestaoButton>Teclados</SugestaoButton>
                        </Sugestao>
                        <Sugestao>
                            <SugestaoImage src={monitoresImg}></SugestaoImage>
                            <SugestaoButton>Monitores</SugestaoButton>
                        </Sugestao>
                    </Sugestoes>
            </Content>
            <Footer/>
        </Container>      

    );
}