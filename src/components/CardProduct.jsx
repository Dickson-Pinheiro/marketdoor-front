import styled from 'styled-components'

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
                <p>R${price/100}</p>
                <p>{category}</p>
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
background-color: #FFB800;
cursor: pointer;
transition: 300ms;
border: 1px solid #FFFFFF;
border-radius: 9px;
transition: 300ms;
&:hover {
    border: 1px solid #FFB800;
}
`
const ContainerImage = styled.div`
    width: 100%;
    height: 120px;
    background-image: ${props => 'url(' + props.bg + ')' };
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-color: white;
    border-radius: 8px 8px 50px 50px;
    transition: 300ms;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 5px;
    h1 {
        font-weight: bold;
        font-family: 'Nunito', sans-serif;
        font-size: 18px;
    }
    p {
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        font-size: 14px;
        color: #4C5958;
    }
`

const Infos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: absolute;
    bottom: 0;
    width: 220px;
    color: #ffffff;
    p {
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        font-size: 16px;
    }
`