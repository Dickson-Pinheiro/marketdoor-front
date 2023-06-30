import { useEffect } from "react"
import { styled } from "styled-components"

export default function Pagination({ current, setCurrent, count, updateProducts, setUpdateProducts }) {

    function updateCurrent(newCurrent){
        setCurrent(newCurrent)
        setUpdateProducts(!updateProducts)
    }
    let pageLength = 12
    if (count < pageLength) {
        return ''
    }
    if (current === 1 && Math.ceil(count / pageLength) === 2) {
        return (
            <Container>
                <Selected>{current}</Selected>
                <NoSelected onClick={() => updateCurrent(current + 1)}>{current + 1}</NoSelected>
            </Container>
        )
    }
    if (current === 1 && Math.ceil(count / pageLength) > 2) {
        return (
            <Container>
                <Selected>{current}</Selected>
                <NoSelected onClick={() => updateCurrent(current + 1)}>{current + 1}</NoSelected>
                <NoSelected onClick={() => updateCurrent(current + 2)}>{current + 2}</NoSelected>
            </Container>
        )
    }
    if (current === Math.ceil(count / pageLength) && Math.ceil(count / pageLength) === 2) {
        return (
            <Container>
                <NoSelected onClick={() => updateCurrent(current - 1)}>{current - 1}</NoSelected>
                <Selected>{current}</Selected>
            </Container>
        )
    }

    if (current > 1 && current !== Math.ceil(count / pageLength)) {
        return (
            <Container>
                <NoSelected onClick={() => updateCurrent(current - 1)}>{current - 1}</NoSelected>
                <Selected>{current}</Selected>
                <NoSelected onClick={() => updateCurrent(current + 1)}>{current + 1}</NoSelected>
            </Container>
        )
    }
    if (current > 1 && current === Math.ceil(count / pageLength)) {
        return (
            <Container>
                <NoSelected onClick={() => updateCurrent(current - 2)}>{current - 2}</NoSelected>
                <NoSelected onClick={() => updateCurrent(current - 1)}>{current - 1}</NoSelected>
                <Selected>{current}</Selected>
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    width: 150px;
    margin: 0 auto;
    margin-top: 30px;
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