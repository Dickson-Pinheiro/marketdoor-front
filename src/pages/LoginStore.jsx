import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import styled from 'styled-components'
import storeApi from "../services/storeApi";
import logoImg from '../assets/market_logo.png';
import {toast} from 'react-toastify'
import { FormStyle, Button, ContainerInput } from "../styles/FormStyle";
import { useNavigate } from "react-router-dom";

export default function LoginStore() {
    const { loginStore } = storeApi()
    const navigate = useNavigate()

    async function submitLogin(values) {
        try {
            const response = await loginStore(values.username, values.password)
            localStorage.setItem('token', response.token)
            values.username = ''
            values.password = ''
            navigate('/store/dash')
        } catch (error) {
            console.log('error')
            toast('Não foi possível concluir o login.')
        }
    }
    return (
        <ContainerLogin>
            <ContainerLogo>
                <h1>MarketDoor</h1>
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
                                <Field name="username" placeholder="username..." type="text" required/>
                                <ErrorMessage name="username" component="p" />
                            </ContainerInput>
                            <ContainerInput>
                                <Field name="password" placeholder="password..." type="password" required/>
                                <ErrorMessage name="password" component="p" />
                            </ContainerInput>
                            <Button disabled={formik.isSubmitting} type="submit">Login</Button>
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
`

const ContainerLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    padding: 15px;
    margin-bottom: 50px;
    h1 {
        font-family: 'Nunito', sans-serif;
        font-size: 32px;
        font-weight: bold;
        color: ${props => props.theme.logoColor};
    }
    `