import styled from 'styled-components'
import Header from '../components/Header'
import Fruits from '../components/fruits'

export default function Home(){
    return (
        <ContainerHome>
            <Header></Header>
            <Fruits></Fruits>
        </ContainerHome>
    )
}

const ContainerHome = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #FFFFFF;
`