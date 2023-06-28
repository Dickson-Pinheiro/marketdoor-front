import styled from 'styled-components'
import fruitsImg from '../assets/fruits.png'
import logoImg from '../assets/market_logo.png'

export default function Fruits(){
    return(
        <FruitsContainer>
            <Container>
                <h1>delivery inteligente para o seu mercado!</h1>
            </Container>
        </FruitsContainer>
    )
}

const FruitsContainer = styled.div`
    background-color: #000000;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 140px;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #00000099;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 8px;
    box-sizing: border-box;
    @media(max-width: 650px){
        flex-direction: column;
    }
    h1 {
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 28px;
        color: #ffffff;
        text-align: center;
    }
`

const Circle = styled.div`
    width: 120px;
    height: 120px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    @media(max-width: 650px){
        display: none;
    }
    h2 {
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #030532;
    }
    img {
        width: 60px;
    }
`