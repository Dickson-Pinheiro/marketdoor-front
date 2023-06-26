import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import styled from 'styled-components'
import marketApi from "../services/marketApi";
import logoImg from '../assets/market_logo.png';
import { FormStyle, Button, ContainerInput } from "../styles/FormStyle";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const navigate = useNavigate()
    const { createMarket } = marketApi()

    async function submitSignup({ name, email, password }) {
        try {
            await createMarket(name, email, password)
            navigate('/market/login')
        } catch (error) {
            toast('Não foi possível criar a conta. Tente novamente')
        }
    }
    return (
        <ContainerSignup>
            <ContainerLogo>
                <img src={logoImg} />
                <h1>Market Door</h1>
            </ContainerLogo>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Required").min(3, 'Deve ter ao menos 3 caracteres'),
                    email: Yup.string().email('Invalid email format.').required('Required'),
                    password: Yup.string().required('Required')
                })}
                onSubmit={submitSignup}
            >
                {
                    formik => (
                        <FormStyle onSubmit={formik.handleSubmit}>
                            <ContainerInput>
                                <Field name="name" placeholder="market..." type="text" required/>
                                <ErrorMessage name="name" component="p" />
                            </ContainerInput>
                            <ContainerInput>
                                <Field name="email" placeholder="email..." type="text" required/>
                                <ErrorMessage name="email" component="p" />
                            </ContainerInput>
                            <ContainerInput>
                                <Field name="password" placeholder="password..." type="password" required/>
                                <ErrorMessage name="password" component="p" />
                            </ContainerInput>
                            <Button disable={formik.isSubmitting} type="submit">signup</Button>
                        </FormStyle>
                    )
                }
            </Formik>
        </ContainerSignup>
    )
}

const ContainerSignup = styled.div`
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