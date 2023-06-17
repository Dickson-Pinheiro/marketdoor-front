import styled from 'styled-components'
import Header from '../components/Header'

export default function Home(){
    return (
        <ContainerHome>
            <Header></Header>
        </ContainerHome>
    )
}

const ContainerHome = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #FFFFFF;
`