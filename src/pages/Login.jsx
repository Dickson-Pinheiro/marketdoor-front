import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import { toast } from "react-toastify";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import logoImg from '../assets/market_logo.png';
import { FormStyle, Button, ContainerInput } from "../styles/FormStyle";
import marketApi from "../services/marketApi";

export default function Login() {
    const { loginMarket } = marketApi()
    const navigate = useNavigate()

    async function submitLogin({ email, password }) {
        try {
            const data = await loginMarket(email, password)
            localStorage.setItem('token', data.token)
            navigate('/market/dash')
        } catch (error) {
         toast('Não foi possível concluir o login')   
        }
    }

    return (
        <ContainerLogin>
            <ContainerLogo>
                <h1>MarketDoor</h1>
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
                                <Field name="email" placeholder="email..." type="text" required/>
                                <ErrorMessage name="email" component="p" />
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
        color: ${props => props.theme.color};
    }
`