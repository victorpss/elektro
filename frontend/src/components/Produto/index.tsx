import { useState } from "react";
import { ProductImage, ProductName, Container, Interativo, ProductInfo, ProductPrice, Favorito } from "./style";
import { Link } from "react-router-dom";

export default function Produto({ imagePath, name, price, link }: {imagePath: string, name: string, price: string, link?: string}){
    const [favoritado, setFavoritado] = useState(false);

    const handleFavoriteToggle = () => {
        setFavoritado(!favoritado);
    };
    
    return (
        <Container>
                {link ? (
                    <Link to={link}><ProductImage src={imagePath} alt={name} /></Link>
                ) : (
                    <ProductImage src={imagePath} alt={name} />
                )}
            <Interativo>
                <ProductInfo>
                    <ProductName>{name}</ProductName>
                    <ProductPrice>{price}</ProductPrice>
                </ProductInfo>
                <Favorito
                    onClick={handleFavoriteToggle}
                    fill={favoritado ? "black" : "none"}
                    viewBox="0 0 22 19"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#2B2B2B" 
                    stroke-width="1.89157" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                    >
                    <path d="M6.93716 1.03088C4.06428 1.03088 1.73535 3.35983 1.73535 6.23269C1.73535 11.4345 7.88294 16.1634 11.1932 17.2635C14.5034 16.1634 20.651 11.4345 20.651 6.23269C20.651 3.35983 18.3221 1.03088 15.4492 1.03088C13.6899 1.03088 12.1346 1.90427 11.1932 3.24108C10.2518 1.90427 8.69646 1.03088 6.93716 1.03088Z" />
                </Favorito>
            </Interativo>
        </Container>

    );
}