import styled from 'styled-components'
import fruitsImg from '../assets/fruits.png'
import logoImg from '../assets/market_logo.png'

export default function Fruits(){
    return(
        <FruitsContainer>
            <Container>
                <Circle>
                    <img src={logoImg} />
                    <h2>MARKET DOOR</h2>
                </Circle>
                <h1>delivery inteligente para o seu mercado!</h1>
            </Container>
        </FruitsContainer>
    )
}

const FruitsContainer = styled.div`
    background-image: url(${fruitsImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 300px;
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
    @media(max-width: 600px){
        flex-direction: column;
    }
    h1 {
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 38px;
        color: #ffffff;
    }
`

const Circle = styled.div`
    width: 220px;
    height: 220px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    @media(max-width: 600px){
        width: 120px;
        height: 120px;
    }
    h2 {
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 43px;
        color: #030532;
        @media(max-width: 600px){
        font-size: 24px;
        text-align: center;
    }
    }
    img {
        width: 110px;
        @media(max-width: 600px){
        width: 55px;
    }
    }
`