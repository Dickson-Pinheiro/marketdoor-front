import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import styled from 'styled-components'
import storeApi from "../services/storeApi";
import logoImg from '../assets/market_logo.png';
import {toast} from 'react-toastify'
import { FormStyle, Button, ContainerInput } from "../styles/FormStyle";

export default function LoginStore() {
    const { loginStore } = storeApi()

    async function submitLogin(values) {
        try {
            const response = await loginStore(values.username, values.password)
            localStorage.setItem('token', response.token)
            values.username = ''
            values.password = ''
        } catch (error) {
            toast('Não foi possível concluir o login.')
        }
    }
    return (
        <ContainerLogin>
            <ContainerLogo>
                <img src={logoImg} />
                <h1>Market Door</h1>
            </ContainerLogo>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={Yup.object({
                    username: Yup.string().required('required'),
                    password: Yup.string().required('Required')
                })}
                onSubmit={submitLogin}
            >
                {
                    formik => (
                        <FormStyle onSubmit={formik.handleSubmit}>
                            <ContainerInput>
                                <Field name="username" placeholder="username..." type="text" />
                                <ErrorMessage name="username" component="p" />
                            </ContainerInput>
                            <ContainerInput>
                                <Field name="password" placeholder="password..." type="password" />
                                <ErrorMessage name="password" component="p" />
                            </ContainerInput>
                            <Button disable={formik.isSubmitting} type="submit">Login</Button>
                        </FormStyle>
                    )
                }
            </Formik>
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
`

const ContainerLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    padding: 15px;
    margin-bottom: 50px;
    img {
        width: 90px;
    }
    h1 {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 32px;
        font-weight: bold;
        color: #030532;
    }
    `