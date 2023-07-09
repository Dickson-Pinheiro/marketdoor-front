import styled from 'styled-components'

export default function Category({ category }){
    return (
    <ContainerCategory category = {category}>
        <p>{category}</p>
    </ContainerCategory>
    )
}

const ContainerCategory = styled.div`
    background-color: ${props => props.theme.categories[props.category]};
    border-bottom-right-radius: 6px;
    border-top-left-radius: 6px;
    padding: 8px;
    color: ${props => props.theme.white};
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 12px;
`