import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #F5F5F5;
`;

export const LoginHeader = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1.5px solid #B9B9B9;
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
`;

export const SetaIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 32px;
`;

export const Title = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    color: #2B2B2B;
    margin: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    width: 329.95px;
    height: 329.95px;
`;

export const InputField = styled.div`
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 326px;
    height: 40px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    background-color: transparent;
    border: 0;
    border-bottom: 1.5px solid #B9B9B9;
    text-indent: 28px;
    padding-right: 40px;
    box-sizing: border-box;
`;

export const InputImage = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    cursor: pointer;
    user-select: none;
`;

export const Text = styled.h5`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #2b2b2b;
`;

export const EsqueciSenha = styled(Text)`
    color: black;
    text-decoration: underline;
    margin: 0 0px 20px 45%;
    cursor: pointer;
`

export const EntrarComSocial = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 20px 0;
`;

export const SocialButton = styled.div`
    width: 68.99px;
    height: 68.99px;
    background-color: #2B2B2B; 
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CadastreSe = styled(Text)`
    color: #0271A0;
    text-decoration: underline;
    cursor: pointer;
`;