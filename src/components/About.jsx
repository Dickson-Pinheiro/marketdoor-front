import styled from 'styled-components'

export default function About() {
    return (
        <AboutContainer>
            <ContainerText>
                <p>Na Market Door, você pode <span>criar o seu perfil de mercado</span> e <span>gerenciar  suas lojas</span>.  Você possui o controle para cadastrar novas lojas e gerenciar o acesso para cada uma, dando a liberdade para que cada loja cadastre seus próprios produtos e controle o seu delivery.</p>
                <p>Com foco no <span>gerenciamento</span> de estoque, nossa proposta é conseguir integrar sua loja física com o nosso app de delivery. Dessa forma, todas as promoções e disponibilidade de produtos estarão atualizados em tempo real, <span>sinctonizados com a sua loja.</span></p>
            </ContainerText>
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
        color: ${props => props.theme.color};
        font-weight: 600;
        span {
            color: ${props => props.theme.primary};
            font-weight: 700;
        }
    }
`
