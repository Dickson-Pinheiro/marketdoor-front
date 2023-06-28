import styled from 'styled-components'

import logoImg from '../assets/market_logo.png';
import MarketForm from "../components/MarketForm";
export default function Signup() {
    return (
        <ContainerSignup>
            <ContainerLogo>
                <img src={logoImg} />
                <h1>Market Door</h1>
            </ContainerLogo>
            <MarketForm />
        </ContainerSignup>
    )
}

const ContainerSignup = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
`
const ContainerLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    padding: 15px;
    margin-bottom: 50px;
    img {
        width: 90px;
    }
    h1 {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 32px;
        font-weight: bold;
        color: #030532;
    }
`