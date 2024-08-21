import Footer from "../../components/Footer";
import HeaderGeral from "../../components/HeaderGeral";
import Produto from "../../components/Produto";
import { Container, Filtro, PesquisaContainer, PesquisaInput, PesquisaInputField, PesquisaIcon, TVsDisplay } from "./style";

import lupaIcon from "../../assets/icons/lupaCinza.png";
import filtroIcon from "../../assets/icons/filtro.png";

import tvLG from "../../assets/produtos/tvLG.png";
import tvSamsung from "../../assets/produtos/tvSamsung.png";
import tvTCL from "../../assets/produtos/tvTCL.png";
import tvSemp from "../../assets/produtos/tvSemp.png";
import tvAOC from "../../assets/produtos/tvAOC.png";
import tvPhilips from "../../assets/produtos/tvPhilips.png";

export default function TV(){
    return (
        <Container>
            <HeaderGeral text="Pesquisa"/>
            <PesquisaContainer>
                <PesquisaInputField>
                    <PesquisaIcon src={lupaIcon} />
                    <PesquisaInput type="text" placeholder="Encontrar na Elektro"/>
                </PesquisaInputField>
                <Filtro src={filtroIcon}></Filtro>
            </PesquisaContainer>
            <TVsDisplay>
                <Produto imagePath={tvLG} name="TV LG" price="R$2.000,00"/>
                <Produto imagePath={tvSamsung} name="TV Samsung" price="R$1.400,00"/>
                <Produto imagePath={tvTCL} name="TV TCL" price="R$1.000,00"/>
                <Produto imagePath={tvSemp} name="TV Semp" price="R$1.200,00"/>
                <Produto imagePath={tvAOC} name="TV AOC" price="R$1.300,00"/>
                <Produto imagePath={tvPhilips} name="TV Philips" price="R$1.400,00"/>
            </TVsDisplay>
            <Footer/>
        </Container>
    );
}
