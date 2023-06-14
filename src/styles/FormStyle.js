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
    font-family: 'Laila', sans-serif;
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
        font-family: 'Laila', sans-serif;
    }
    input {
        font-family: 'Laila', sans-serif;
        padding-left: 15px;
        width: 320px;
        height: 50px;
        border-radius: 8px;
        border: 3px solid #FFB800;
        &::placeholder {
            color: #030532;
            font-weight: 600;
        }
    }
`