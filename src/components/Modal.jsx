import { useLayoutEffect, useRef } from "react"
import { styled } from "styled-components"

export default function Modal({ children, open }) {
    const dialogRef = useRef()

    useLayoutEffect(() => {
        if(open && !dialogRef.current?.open){
            dialogRef.current?.showModal()
        } else if(!open && dialogRef.current?.open ){
            dialogRef.current?.close()
        }
    }, [open])

    return (
        <ContainerModal ref={dialogRef}>
            {children}
        </ContainerModal>
    )
}

const ContainerModal = styled.dialog`
    z-index: 2;
    border: 1px solid ${props => props.theme.primary};
    width: 100%;
    max-width: 800px;
    height: 80%;
    border-radius: 8px;
    box-shadow: 0px 0px 6px ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColor};
    &::backdrop {
    background-color: #000000;
    opacity: 0.6;
    }
`