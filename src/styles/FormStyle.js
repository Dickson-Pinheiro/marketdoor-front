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
    color: #ffffff;
    font-family: 'Nunito', sans-serif;
    border-radius: 12px;
    font-weight: bold;
    font-size: 24px;
    border: none;
    background-color: #FFB800;
    cursor: pointer;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    p {
        font-size: 12px;
        color: #FFB800;
        font-family: 'Nunito', sans-serif;
    }
    input {
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        padding-left: 15px;
        width: 320px;
        height: 50px;
        border-radius: 8px;
        border: 3px solid #FFB800;
        &::placeholder {
            color: #4C5958;
            font-weight: 800;
            font-family: 'Nunito', sans-serif;
        }
    }
`