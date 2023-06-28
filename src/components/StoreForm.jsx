import { useEffect, useState } from 'react'
import * as yup from 'yup'
import { Field, Formik } from 'formik'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import productApi from '../services/productApi'
import categoryApi from '../services/categoryApi'

export default function StoreForm({updateProducts, setUpdateProducts, setOpen, open}) {
    const [categories, setCategories] = useState()
    const { getCategories } = categoryApi()
    const { createProduct } = productApi()

    useEffect(() => {
        async function pullCategories() {
            const response = await getCategories()
            setCategories([...response])
        }
        pullCategories()
    }, [])

    async function handleProduct(values) {
        try {
            await createProduct(values.name, values.description, values.image_url, values.by_weight, values.active, values.price, values.category_id)
            values.name = ''
            values.description = ''
            values.image_url = ''
            values.price = 0
            setUpdateProducts(!updateProducts)
            setOpen(false)
        } catch (error) {
            toast('Não foi possível criar o produto')
        }
    }

    function closeModal(){
        setOpen(false)
    }

    return (
        <Formik
            initialValues={{ name: '', description: '', Image: '', active: true, by_weight: false, price: 0, category_id: 0 }}
            validationSchema={yup.object({
                name: yup.string().required(),
                description: yup.string().required(),
                image_url: yup.string().url().required(),
                by_weight: yup.boolean().required(),
                active: yup.boolean().required(),
                price: yup.number().integer().required(),
                category_id: yup.number().integer().required()
            })}
            onSubmit={handleProduct}
        >
            {formik => (
                <Form onSubmit={formik.handleSubmit} method='dialog'> 
                    <Field type='text' name='name' placeholder='name' requred />
                    <Field as='textarea' type='text' name='description' placeholder='Description' requred />
                    <Field type='text' name='image_url' placeholder='image url' requred />
                    <p>Este produto é pesável?</p>
                    <Field type='checkbox' name='by_weight' />
                    <p>Este produto está tivo?</p>
                    <Field type='checkbox' name='active' />
                    <Field type='text' name='price' placeholder='price' required />
                    <Field as='select' name='category_id'>
                        {categories ? categories.map(item => <option value={item.id} key={item.id}>{item.category}</option>) : ''}
                    </Field>
                    <ContainerButton>
                        <Button type='submit' disabled={formik.isSubmitting} >Criar</Button>
                        <ButtonClose type='button' onClick={closeModal}>Fechar</ButtonClose>
                    </ContainerButton>
                </Form>
            )}
        </Formik>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    textarea {
        resize: none;
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        padding-left: 10px;
        width: 320px;
        height: 90px;
        border-radius: 4px;
        border: 1px solid #FFB800;
        &::placeholder {
            color: #4C5958;
            font-weight: 800;
            font-family: 'Nunito', sans-serif;
        }
    }
    input[type=text] {
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        padding-left: 10px;
        width: 320px;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #FFB800;
        &::placeholder {
            color: #4C5958;
            font-weight: 800;
            font-family: 'Nunito', sans-serif;
        }
    }
    select {
        width: 320px;
        height: 30px;
        font-size: 18px;
        border-radius: 8px;
        border: none;
        background-color: #FFB800;
        color: #FFFFFF;
        font-weight: bold;
        padding-left: 10px;
        font-family: 'Nunito', sans-serif;
    }
    p {
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        color: #868585;
    }
`
const Button = styled.button`
    width:  120px;
    height: 35px;
    color: #ffffff;
    font-family: 'Nunito', sans-serif;
    border-radius: 4px;
    font-weight: bold;
    font-size: 18px;
    border: none;
    background-color: #FFB800;
    cursor: pointer;
    &:disabled {
        opacity: 0.9;
    }
`

const ButtonClose = styled.button`
    width:  120px;
    height: 35px;
    color: #ffffff;
    font-family: 'Nunito', sans-serif;
    border-radius: 4px;
    font-weight: bold;
    font-size: 18px;
    border: none;
    background-color: #363532;
    cursor: pointer;
    &:disabled {
        opacity: 0.9;
    }
`
const ContainerButton = styled.div`
    display: flex;
    gap: 15px;
`