import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import styled from 'styled-components'
import logoImg from '../assets/market_logo.png';
import { FormStyle, Button, ContainerInput } from "../styles/FormStyle";
export default function Login() {
    async function submitLogin({ email, password }) {
        return;
    }
    return (
        <ContainerLogin>
            <ContainerLogo>
                <img src={logoImg} />
                <h1>Market Door</h1>
            </ContainerLogo>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Invalid email format.').required('Required'),
                    password: Yup.string().required('Required')
                })}
                onSubmit={submitLogin}
            >
                {
                    formik => (
                        <FormStyle onSubmit={formik.handleSubmit}>
                            <ContainerInput>
                                <Field name="email" placeholder="email..." type="text" />
                                <ErrorMessage name="email" component="p" />
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