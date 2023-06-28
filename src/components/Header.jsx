import styled from 'styled-components'
import logoImg from '../assets/market_logo.png'

export default function Header(){
    return (
        <ContainerHeader>
            <HeaderContent>
                <Circle>
                   <h1>MarketDoor</h1>
                </Circle>
                <Menu>
                    <li><a>INICIO</a></li>
                    <li><a>SOBRE</a></li>
                    <Button>Login</Button>
                </Menu>
            </HeaderContent>
        </ContainerHeader>
    )
}

const ContainerHeader = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFB800;
`

const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    max-width: 800px;
`

const Circle = styled.div`
    cursor: pointer;
    h1 {
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        font-size: 24px;
        color: #030532;
    }
`

const Menu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    li {
        list-style: none;
        a {
            text-decoration: none;
            font-family: 'Bebas Neue', sans-serif;
            color: #030532;
            cursor: pointer;
            font-weight: 400;
            font-size: 16px;
            transition: 300ms;
            &:hover {
                color: #FFFFFF;
            }
        }
    }
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    color: #030532;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    width: 80px;
    height: 32px;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 600;
    transition: 300ms;
    &:hover {
        background-color: #030532;
        color: #FFB800;
    }
`