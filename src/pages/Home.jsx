import styled from 'styled-components'
import Header from '../components/Header'
import Fruits from '../components/fruits'
import About from '../components/About'

export default function Home(){
    return (
        <ContainerHome>
            <Header></Header>
            <Fruits></Fruits>
            <About></About>
        </ContainerHome>
    )
}

const ContainerHome = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #FFFFFF;
`