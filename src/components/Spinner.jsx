import { PulseLoader } from 'react-spinners'
import { styled } from 'styled-components'

export default function Spinner() {

    return (
        <ContainerSpinner>
            <PulseLoader />
        </ContainerSpinner>
    )

}

const ContainerSpinner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    margin-top: 120px;
    svg {
        color: ${props => props.theme.primary}
    }
`