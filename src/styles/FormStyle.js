import styled from 'styled-components'

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const Button = styled.button`
    width: 120px;
    height: 50px;
    color: ${props => props.theme.white};
    font-family: 'Nunito', sans-serif;
    border-radius: 12px;
    font-weight: bold;
    font-size: 24px;
    border: none;
    background-color: ${props => props.theme.primary};
    cursor: pointer;
    transition: 300ms;
    &:hover {
        background-color: ${props => props.theme.hoverButton};
    }
    &:disabled {
        opacity: 0.9;
    }
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    p {
        font-size: 12px;
        color: ${props => props.theme.secondary};
        font-family: 'Nunito', sans-serif;
    }
    input {
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        color: ${props => props.theme.color};
        padding-left: 15px;
        width: 320px;
        height: 50px;
        border-radius: 8px;
        border: 1px solid ${props => props.theme.primary};
        background-color: ${props => props.theme.backgroundInput};
        &::placeholder {
            color: ${props => props.theme.placeholderColor};
            font-weight: 800;
            font-family: 'Nunito', sans-serif;
        }
    }
`