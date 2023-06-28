import styled from 'styled-components'
import productApi from '../services/productApi'
import { useEffect, useState } from 'react'
import CardProduct from '../components/CardProduct'
import StoreForm from '../components/StoreForm'
import Modal from '../components/Modal'
import { FaPlus } from 'react-icons/fa'
import NoProduct from '../components/NoProduct'
import Spinner from '../components/Spinner'

export default function DashboardStore() {
    const { getProducts } = productApi()
    const [products, setProducts] = useState()
    const [updateProducts, setUpdateProducts] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        async function pullProducts() {
            const response = await getProducts()
            setProducts([...response])
        }
        pullProducts()
    }, [updateProducts])

    function openModal() {
        setOpen(!open)
        console.log('chamou')
        console.log(open)
    }

    return (
        <ContainerDashBoardStore>
            <ContainerTitle>
                <h1>Dashboard</h1>
                <p>Aqui você pode criar e gerenciar novos produtos para a sua loja!</p>
            </ContainerTitle>
            <ContainerContent>
                {products === undefined ? <Spinner />  : (
                    products.length === 0 ? <NoProduct /> : (
                        <ContainerProducts>
                            {
                                products.map(item => <CardProduct
                                    key={item.id}
                                    category={item.category.category}
                                    description={item.description}
                                    image_url={item.image_url}
                                    name={item.name}
                                    price={item.price}
                                />
                                )
                            }
                        </ContainerProducts>
                    )
                )}
            </ContainerContent>
            <Modal open={open} setOpen={setOpen}><StoreForm setUpdateProducts={setUpdateProducts} updateProducts={updateProducts} open={open} setOpen={setOpen} /></Modal>
            <AddProduct onClick={openModal}><FaPlus size={30} color='#FFFFFF' /></AddProduct>
        </ContainerDashBoardStore>
    )
}

const ContainerContent = styled.div`
`

const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
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

const ContainerDashBoardStore = styled.main`
    min-height: 100vh;
    width: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
`

const ContainerProducts = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    margin-top: 40px;
`

const AddProduct = styled.button`
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #d9d9d9;
    cursor: pointer;
    background-color: #FFB800;

`