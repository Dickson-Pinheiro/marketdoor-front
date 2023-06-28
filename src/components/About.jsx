import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'


export default function About() {
    const navigate = useNavigate()

    function handleLoginMarket(){
        navigate('/market/login')
    }

    function handleLoginStore(){
        navigate('/store/login')
    }


    return (
        <AboutContainer>
            <h1>Crie seu <span>mercado</span> e gerencie uma ou mais <span>lojas</span>!</h1>
            <ContainerText>
                <p>Na Market Door, você pode <span>criar o seu perfil de mercado</span> e <span>gerenciar  suas lojas</span>.  Você possui o controle para cadastrar novas lojas e gerenciar o acesso para cada uma, dando a liberdade para que cada loja cadastre seus próprios produtos e controle o seu delivery.</p>
                <p>Com foco no <span>gerenciamento</span> de estoque, nossa proposta é conseguir integrar sua loja física com o nosso app de delivery. Dessa forma, todas as promoções e disponibilidade de produtos estarão atualizados em tempo real, <span>sinctonizados com a sua loja.</span></p>
            </ContainerText>
            <Container>
            </Container>
        </AboutContainer>
    )
}

const AboutContainer = styled.main`
    padding: 12px;
    width: 100%;
    padding-bottom: 25px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    h1 {
        font-size: 24px;
        font-weight: 700;
        font-family: 'Nunito', sans-serif;
        color: #030532;
        span {
            color: #FFB800;
        }
    }
`

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    p {
        max-width: 320px;
        width: 100%;
        font-size: 18px;
        font-family: 'Nunito', sans-serif;
        color: #030532;
        font-weight: 600;
        span {
            color: #FFB800;
        }
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    p {
        font-size: 18px;
        font-family: 'Nunito', sans-serif;
        color: #030532;
        a {
            text-decoration: underline;
            color: #FFB800;
            cursor: pointer;
        }
    }
`

const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    button {
        width: 180px;
        height: 50px;
        color: #ffffff;
        font-family: 'Nunito', sans-serif;
        border-radius: 12px;
        font-weight: bold;
        font-size: 20px;
        border: none;
        background-color: #FFB800;
        cursor: pointer;
        transition: 300ms;
        &:hover {
            color: #FFB800;
            background-color: #030532;
        }
    }
`