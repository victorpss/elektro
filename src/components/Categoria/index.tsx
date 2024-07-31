import { CategoryImage, CategoryName, Container } from "./style";

export default function Categoria({ imagePath, name}: {imagePath: string, name: string}){
    return (
        <Container>
            <CategoryImage src={imagePath}></CategoryImage>
            <CategoryName>{name}</CategoryName>
        </Container>

    );
}