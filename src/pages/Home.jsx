import styled from 'styled-components'
import Header from '../components/Header'
import Fruits from '../components/fruits'
import About from '../components/About'
import MarketForm from '../components/MarketForm'

export default function Home() {
    return (
        <ContainerHome>
            <Header></Header>
            <Fruits></Fruits>
            <Container>
                <About></About>
                <ContainerCreateMarket>
                    <h1>Crie seu cadastro como mercado aqui</h1>
                    <MarketForm></MarketForm>
                </ContainerCreateMarket>
            </Container>
        </ContainerHome>
    )
}

const ContainerHome = styled.div`
    width: 100%;
    min-height: 100vh;
`

const Container = styled.div`
    display: flex;
`

const ContainerCreateMarket = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 24px;

    h1 {
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 24px;
    }
`