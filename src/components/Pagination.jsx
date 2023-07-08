import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { styled } from 'styled-components'

export default function Pagination({ current, setCurrent, count, updateProducts, setUpdateProducts }) {

    function updateCurrent(newCurrent) {
        setCurrent(newCurrent)
        setUpdateProducts(!updateProducts)
    }
    let pageLength = 12
    if (count < pageLength) {
        return ''
    }
    if (current === 1 && Math.ceil(count / pageLength) === 2) {
        return (
            <ContainerArrow>
                <FaArrowLeft color='#868585' />
                <Container>
                    <Selected>{current}</Selected>
                    <NoSelected onClick={() => updateCurrent(current + 1)}>{current + 1}</NoSelected>
                </Container>
                <FaArrowRight onClick={() => updateCurrent(current + 1)}/>
            </ContainerArrow>
        )
    }
    if (current === 1 && Math.ceil(count / pageLength) > 2) {
        return (
            <ContainerArrow>
                <FaArrowLeft color='#868585' />
                <Container>
                    <Selected>{current}</Selected>
                    <NoSelected onClick={() => updateCurrent(current + 1)}>{current + 1}</NoSelected>
                    <NoSelected onClick={() => updateCurrent(current + 2)}>{current + 2}</NoSelected>
                </Container>
                <FaArrowRight onClick={() => updateCurrent(current + 1)} />
            </ContainerArrow>
        )
    }
    if (current === Math.ceil(count / pageLength) && Math.ceil(count / pageLength) === 2) {
        return (
            <ContainerArrow>
                <FaArrowLeft onClick={() => updateCurrent(current - 1)} />
                <Container>
                    <NoSelected onClick={() => updateCurrent(current - 1)}>{current - 1}</NoSelected>
                    <Selected>{current}</Selected>
                </Container>
                <FaArrowRight color='#868585'/>
            </ContainerArrow>
        )
    }

    if (current > 1 && current !== Math.ceil(count / pageLength)) {
        return (
            <ContainerArrow>
                <FaArrowLeft onClick={() => updateCurrent(current - 1)} />
                <Container>
                    <NoSelected onClick={() => updateCurrent(current - 1)}>{current - 1}</NoSelected>
                    <Selected>{current}</Selected>
                    <NoSelected onClick={() => updateCurrent(current + 1)}>{current + 1}</NoSelected>
                </Container >
                <FaArrowRight onClick={() => updateCurrent(current + 1)} />
            </ContainerArrow>
        )
    }
    if (current > 1 && current === Math.ceil(count / pageLength)) {
        return (
            <ContainerArrow>
                <FaArrowLeft onClick={() => updateCurrent(current - 1)} />
                <Container>
                    <NoSelected onClick={() => updateCurrent(current - 2)}>{current - 2}</NoSelected>
                    <NoSelected onClick={() => updateCurrent(current - 1)}>{current - 1}</NoSelected>
                    <Selected>{current}</Selected>
                </Container>
                <FaArrowRight color='#868585'/>
            </ContainerArrow>
        )
    }
}

const Container = styled.div`
    display: flex;
`

const NoSelected = styled.div`
    width: 30px;
    height: 30px;
    background-color: #FFB800;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    &:hover {
        background-color: rgb(245, 131, 54);
    }
`
const Selected = styled.div`
    width: 30px;
    height: 30px;
    background-color: rgb(240, 96, 0);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
`
const ContainerArrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 150px;
    margin: 0 auto;
    margin-top: 30px;
    svg {
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            color: #FFB800;
        }
    }
`