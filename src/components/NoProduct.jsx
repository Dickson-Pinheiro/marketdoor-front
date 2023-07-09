import { styled } from "styled-components"

export default function NoProduct() {
    return (
        <NoProductContainer>
            <p>Você ainda não tem produtos cadastrados</p>
        </NoProductContainer>
    )
}

const NoProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    p {
        color: ${props => props.theme['gray-2']};
        font-family: 'Nunito', sans-serif;
        font-size: 18px;
        font-weight: bold;
    }
`