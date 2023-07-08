import styled from 'styled-components'
import { FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <ContainerHeader>
            <HeaderContent>
                <Logo>
                    <h1>MarketDoor</h1>
                </Logo>
                <Menu>
                    <ContainerLoginLinks>
                        <button>Login<FiChevronLeft size={18} /></button>
                        <ul>
                            <li><Link to='/market/login'>Market</Link></li>
                            <li><Link to='/store/login'>Store</Link></li>
                        </ul>
                    </ContainerLoginLinks>
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
    background-color: ${props => props.theme.headerBackground};
`

const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    max-width: 800px;
`

const Logo = styled.div`
    cursor: pointer;
    h1 {
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        font-size: 24px;
        color: ${props => props.theme.logoColor};
    }
`

const Menu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
`

const ContainerLoginLinks = styled.div`
    position: relative;
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        background-color: ${props => props.theme.buttonLoginColor};
        color: ${props => props.theme.primary};
        border: none;
        border-radius: 12px;
        cursor: pointer;
        width: 120px;
        height: 32px;
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
    &:hover {
        color: ${props => props.theme.secondary};
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    }
    ul {
        visibility: hidden;
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: absolute;
        top: 23px;
        background-color: ${props => props.theme.buttonLoginColor};
        width: 120px;
        padding: 18px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        a {
            text-decoration: none;
            color: ${props => props.theme.primary};
            font-weight: 600;
            font-size: 14px;
            font-family: 'Nunito', sans-serif;
            transition: 300ms;
            &:hover {
                color: ${props => props.theme.secondary};
            }
        }
    }
    &:hover {
        ul {
            visibility: visible;
        }
        svg {
            transform: rotateZ(-90deg)
        }
    }
`