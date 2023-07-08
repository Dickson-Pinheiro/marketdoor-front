import { useEffect, useState } from "react";
import * as yup from 'yup'
import { toast } from 'react-toastify'
import marketApi from "../services/marketApi";
import { styled } from "styled-components";
import { Formik, Field } from "formik";
import CardStore from "../components/CardStore";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function DashboardMarket() {
    const { getStores, createStore } = marketApi()
    const [stores, setStores] = useState()
    const [updateStores, setUpdateStores] = useState(false)
    const navigate = useNavigate()

    let shouldShowToast = true
    useEffect(() => {
        async function pullStores() {
            try {
                const newStores = await getStores()
                setStores([...newStores])
            } catch (error) {
                if (error.response.status === 401 && shouldShowToast) {
                    shouldShowToast = false
                    toast('É necessário fazer login novamete.')
                    navigate('/market/login')
                }
            }
        }
        pullStores()
    }, [updateStores])

    async function handleStore(value) {
        try {
            await createStore(value.name, value.username, value.password)
            setUpdateStores(!updateStores)
            value.name = ''
            value.username = ''
            value.password = ''
        } catch (error) {
            if (error.name === 'UnauthorizedError') {
                toast('É necessário fazer login novamete.')
                navigate('/market/login')
            }
            toast('Tente com o username diferente.')
        }
    }

    return (
        <ContainerDash>
            <Container>
                <ContainerTitle>
                    <h1>Dashboard</h1>
                    <p>Aqui você pode criar e gerenciar os acessos das suas lojas cadastradas!</p>
                </ContainerTitle>
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={yup.object({
                        name: yup.string().required('name is required'),
                        username: yup.string().required('username is required'),
                        password: yup.string().required('password is required')
                    })}
                    onSubmit={handleStore}
                >
                    {
                        formik => (
                            <Form onSubmit={formik.handleSubmit}>
                                <h2>Adicione uma nova loja</h2>
                                <ContainerInputs>
                                    <Field name="name" type="text" placeholder="name" required />
                                    <Field name="username" type="text" placeholder="username" required />
                                    <Field name="password" type="password" placeholder="password" required />
                                    <Button disabled={formik.isSubmitting} type="submit">Adicionar</Button>
                                </ContainerInputs>
                            </Form>
                        )
                    }
                </Formik>
            </Container>
            <ContainerRedirect>
                <p>Para fazer login com uma loja, <Link to='/store/login'>clique aqui.</Link></p>
            </ContainerRedirect>
            <ContainerStores>
                {stores === undefined ? <Spinner /> : stores.length == 0 ? <p>Você ainda não possui lojas cadastradas.</p> : stores.map(item => <CardStore key={item.username} name={item.name} username={item.username} />).reverse()}
            </ContainerStores>
        </ContainerDash>
    )
}

const ContainerDash = styled.main`
    min-height: 100vh;
    width: 100%;
    padding: 12px;
`

const ContainerRedirect = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    p {
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        color: ${props => props.theme.color};
        a {
            color: ${props => props.theme.primary};
            transition: 300ms;
            &:hover {
                color: ${props => props.theme.secondary};
            }
        }
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 28px;
        color: ${props => props.theme.color};
    }
    p {
        font-family: 'Nunito', sans-serif;
        font-size: 18px;
        font-weight: bold;
        color: ${props => props.theme.color};
    }
`

const ContainerStores = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px;
    align-items: center;
    & > p {
        color: #FFB800;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    h2 {
        font-family: 'Nunito', sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: ${props => props.theme.color};
    }
`

const ContainerInputs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    input {
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        padding-left: 10px;
        color: ${props => props.theme.color};
        width: 220px;
        height: 30px;
        border-radius: 4px;
        border: 1px solid ${props => props.theme.primary};
        background-color: ${props => props.theme.backgroundInput};
        &::placeholder {
            color: ${props => props.theme.placeholderColor};
            font-weight: 800;
            font-family: 'Nunito', sans-serif;
        }
    }
`

const Button = styled.button`
    width: 80px;
    height: 25px;
    color: ${props => props.theme.white};
    font-family: 'Nunito', sans-serif;
    border-radius: 4px;
    font-weight: bold;
    font-size: 12px;
    border: none;
    background-color: ${props => props.theme.primary};
    cursor: pointer;
    &:disabled {
        opacity: 0.9;
    }
`