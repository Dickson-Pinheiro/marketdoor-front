import styled from 'styled-components'
import Category from './Category'

export default function CardProduct({name, description, image_url, price, category}){
    return(
        <ContainerCardProduct>
            <ContainerImage bg={image_url}>
            </ContainerImage>
            <Content>
                <h1>{name}</h1>
                <p>{description}</p>
            </Content>
            <Infos>
                <p>R${(price/100).toFixed(2).toString().replace('.', ',')}</p>
                <Category category={category}/>
            </Infos>

        </ContainerCardProduct>
    )
}

const ContainerCardProduct = styled.div`
display: flex;
position: relative;
flex-direction: column;
width: 220px;
height: 260px;
background-color: ${props => props.theme.backgroundProduct};
cursor: pointer;
transition: 300ms;
border: 3px solid ${props => props.theme.backgroundColor};
border-radius: 9px;
transition: 300ms;
&:hover {
    border: 3px solid ${props => props.theme.hoverProduct};
}
`
const ContainerImage = styled.div`
    width: 100%;
    height: 120px;
    background-image: ${props => 'url(' + props.bg + ')' };
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 6px 6px 50px 50px;
    transition: 300ms;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 5px;
    h1 {
        font-weight: 900;
        font-family: 'Nunito', sans-serif;
        font-size: 18px;
        color: ${props => props.theme.white};
    }
    p {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: ${props => props.theme.white}
    }
`

const Infos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    padding-left: 3px;
    box-sizing: border-box;
    width: 220px;
    color: ${props => props.theme.white};
    p {
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        font-size: 16px;
    }
`