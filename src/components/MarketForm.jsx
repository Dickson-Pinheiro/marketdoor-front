import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import { FormStyle, Button, ContainerInput } from "../styles/FormStyle";
import marketApi from "../services/marketApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function MarketForm() {
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
                            <Field name="name" placeholder="market..." type="text" required />
                            <ErrorMessage name="name" component="p" />
                        </ContainerInput>
                        <ContainerInput>
                            <Field name="email" placeholder="email..." type="text" required />
                            <ErrorMessage name="email" component="p" />
                        </ContainerInput>
                        <ContainerInput>
                            <Field name="password" placeholder="password..." type="password" required />
                            <ErrorMessage name="password" component="p" />
                        </ContainerInput>
                        <Button disabled={formik.isSubmitting} type="submit">signup</Button>
                    </FormStyle>
                )
            }
        </Formik>
    )
}