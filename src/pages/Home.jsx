import styled from 'styled-components'
import Header from '../components/Header'
import Fruits from '../components/fruits'
import About from '../components/About'
import MarketForm from '../components/MarketForm'

export default function Home() {
    return (
        <ContainerHome>
            <Header></Header>
            <Content>
            <h1>Crie seu <span>mercado</span> e gerencie uma ou mais <span>lojas</span>!</h1>
            <Container>
                <About></About>
                <ContainerCreateMarket>
                    <MarketForm></MarketForm>
                </ContainerCreateMarket>
            </Container>
            </Content>
        </ContainerHome>
    )
}

const Content = styled.div`
     h1 {
        text-align: center;
        margin-top: 50px;
        margin-bottom: 50px;
        font-size: 24px;
        font-weight: 700;
        font-family: 'Nunito', sans-serif;
        color: #030532;
        span {
            color: #FFB800;
        }
    }
`

const ContainerHome = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 900px;
    flex: 1;
    margin: 0 auto;
`

const ContainerCreateMarket = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    gap: 24px;

    h1 {
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 24px;
    }
`