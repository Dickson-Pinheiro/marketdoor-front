import { useEffect, useState } from "react";
import * as yup from 'yup'
import { toast } from 'react-toastify'
import marketApi from "../services/marketApi";
import { styled } from "styled-components";
import { Formik, Field } from "formik";
import CardStore from "../components/CardStore";
import { Link } from "react-router-dom";

export default function DashboardMarket() {
    const { getStores, createStore } = marketApi()
    const [stores, setStores] = useState()
    const [updateStores, setUpdateStores] = useState(false)

    useEffect(() => {
        async function pullStores() {
            const newStores = await getStores()
            setStores([...newStores])
            console.log(newStores)
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
            console.log(error)
            toast('Tente com o username diferente.')
        }
    }

    if (stores === undefined) {
        return 'loading'
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
                {stores.length == 0 ? <p>Você ainda não possui lojas cadastradas.</p> : stores.map(item => <CardStore key={item.username} name={item.name} username={item.username} />).reverse()}
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
        color: #868585;
        a {
            color: #FFB800;
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
    }
    p {
        font-family: 'Nunito', sans-serif;
        font-size: 18px;
        font-weight: bold;
        color: #868585;
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
        color: #4C5958;
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
        width: 220px;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #FFB800;
        &::placeholder {
            color: #4C5958;
            font-weight: 800;
            font-family: 'Nunito', sans-serif;
        }
    }
`

const Button = styled.button`
    width: 80px;
    height: 25px;
    color: #ffffff;
    font-family: 'Nunito', sans-serif;
    border-radius: 4px;
    font-weight: bold;
    font-size: 12px;
    border: none;
    background-color: #FFB800;
    cursor: pointer;
    &:disabled {
        opacity: 0.9;
    }
`