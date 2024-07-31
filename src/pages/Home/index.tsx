import { Link } from "react-router-dom";
import { CategoriasDisplay, Container, Ellipse, FollowUs, HomeImage, HomeTitle, LogoImage, Options, ProductsSection, ProdutosDisplay, SectionTitle, SocialIcon, SocialRow } from "./style";
import logo from "../../assets/elektroLogo.png";
import homeImage from "../../assets/homeImage.png";

import Divisor from "../../components/Divisor";
import Categoria from "../../components/Categoria";
import Produto from "../../components/Produto";

import celularesImage from "../../assets/categorias/categoriaCelulares.png"
import notebooksImage from "../../assets/categorias/categoriaNotebooks.png"
import tabletsImage from "../../assets/categorias/categoriaTablets.png"
import perifericosImage from "../../assets/categorias/categoriaPerifericos.png"
import tvsImage from "../../assets/categorias/categoriaTVs.png"
import acessoriosImage from "../../assets/categorias/categoriaAcessorios.png"
import pcsImage from "../../assets/categorias/categoriaPCs.png"
import smartwatchesImage from "../../assets/categorias/categoriaSmartwatches.png"

/* Para você */
import celularImage from "../../assets/produtos/celular.png"
import capaProtetoraImage from "../../assets/produtos/capaProtetora.png"
import carregadorImage from "../../assets/produtos/carregador.png"
import mousepadImage from "../../assets/produtos/mousepad.png"
import tecladoImage from "../../assets/produtos/teclado.png"

/* Produtos em destaque */
import smartTVImage from "../../assets/produtos/smartTV.png"
import monitorImage from "../../assets/produtos/monitor.png"
import headsetImage from "../../assets/produtos/headset.png"
import tabletImage from "../../assets/produtos/tablet.png"
import notebookImage from "../../assets/produtos/notebook.png"

/* Mais vendidos */
import smartphoneImage from "../../assets/produtos/smartphone.png"
import smartwatchImage from "../../assets/produtos/smartwatch.png"
import mouseImage from "../../assets/produtos/mouse.png"
import foneDeOuvidoImage from "../../assets/produtos/foneDeOuvido.png"
import caixaDeSomImage from "../../assets/produtos/caixaDeSom.png"

/* Redes sociais */
import facebookLogo from "../../assets/icons/facebook.png"
import instagramLogo from "../../assets/icons/instagram.png"
import tiktokLogo from "../../assets/icons/tiktok.png"
import twitterLogo from "../../assets/icons/twitter.png"
import linkedinLogo from "../../assets/icons/linkedin.png"


export default function Home(){
    return (
        <Container> 
                <HomeTitle>
                    <LogoImage src={logo}/>
                    Bem-vindo à Elektro!
                </HomeTitle>
                <HomeImage src={homeImage}></HomeImage>
                <Options>   
                    <Ellipse full></Ellipse>
                    <Ellipse></Ellipse>
                    <Ellipse></Ellipse>
                </Options>
                <Divisor width={100}/>
                <ProductsSection>
                    <SectionTitle>Categorias Elektro</SectionTitle>
                    <CategoriasDisplay>
                        <Categoria imagePath={celularesImage} name="Celulares"/>
                        <Categoria imagePath={notebooksImage} name="Notebooks"/>
                        <Categoria imagePath={tabletsImage} name="Tablets"/>
                        <Categoria imagePath={perifericosImage} name="Periféricos"/>
                        <Categoria imagePath={tvsImage} name="TVs"/>
                        <Categoria imagePath={acessoriosImage} name="Acessórios"/>
                        <Categoria imagePath={pcsImage} name="PCs"/>
                        <Categoria imagePath={smartwatchesImage} name="Smartwatches"/>
                    </CategoriasDisplay>
                </ProductsSection>
                <ProductsSection>
                    <SectionTitle>Para você</SectionTitle>
                    <Divisor width={100}/>
                        <ProdutosDisplay>
                            <Produto imagePath={celularImage} name="Celular" price="R$800,00" link="/celular"/>
                            <Produto imagePath={capaProtetoraImage} name="Capa Protetora" price="R$20,00"/>
                            <Produto imagePath={carregadorImage} name="Carregador" price="R$50,00"/>
                            <Produto imagePath={mousepadImage} name="Mousepad" price="R$60,00"/>
                            <Produto imagePath={tecladoImage} name="Teclado" price="R$120,00"/>
                        </ProdutosDisplay>
                </ProductsSection>
                <ProductsSection>
                    <SectionTitle>Produtos em destaque</SectionTitle>
                    <Divisor width={100}/>
                        <ProdutosDisplay>
                            <Produto imagePath={smartTVImage} name="Smart TV" price="R$1.400,00"/>
                            <Produto imagePath={monitorImage} name="Monitor" price="R$750,00"/>
                            <Produto imagePath={headsetImage} name="Headset" price="R$250,00"/>
                            <Produto imagePath={tabletImage} name="Tablet" price="R$300,00"/>
                            <Produto imagePath={notebookImage} name="Notebook" price="R$900,00"/>
                        </ProdutosDisplay>
                </ProductsSection>
                <ProductsSection>
                    <SectionTitle>Mais vendidos</SectionTitle>
                    <Divisor width={100}/>
                        <ProdutosDisplay>
                            <Produto imagePath={smartphoneImage} name="Smartphone" price="R$3.200,00"/>
                            <Produto imagePath={smartwatchImage} name="Smartwatch" price="R$750,00"/>
                            <Produto imagePath={mouseImage} name="Mouse" price="R$250,00"/>
                            <Produto imagePath={foneDeOuvidoImage} name="Fone de ouvido" price="R$300,00"/>
                            <Produto imagePath={caixaDeSomImage} name="Caixa de som" price="R$900,00"/>
                        </ProdutosDisplay>
                </ProductsSection>
                <FollowUs>
                    Siga-nos nas redes sociais!
                    <SocialRow>
                        <SocialIcon src={facebookLogo} alt="Logo do Facebook"></SocialIcon>
                        <SocialIcon src={instagramLogo} alt="Logo do Instagram"></SocialIcon>
                        <SocialIcon src={tiktokLogo} alt="Logo do TikTok"></SocialIcon>
                        <SocialIcon src={twitterLogo} alt="Logo do Twitter"></SocialIcon>
                        <SocialIcon src={linkedinLogo} alt="Logo do LinkedIn"></SocialIcon>
                    </SocialRow>
                </FollowUs>
        </Container>
    );
}