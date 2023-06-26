import styled from 'styled-components'

export default function CardStore({name, username}){
    return (
        <CardStoreContainer>
            <p>name: <strong>{name}</strong></p>
            <p>username: <strong>{username}</strong></p>
        </CardStoreContainer>
    )
}

const CardStoreContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFB800;
    padding: 8px;
    border-radius: 4px;
    width: 100%;
    max-width: 800px;
    color: #FFFFFF;
    p {
        font-family: 'Nunito', sans-serif;
        strong {
            font-weight: bold;
        }
    }
`