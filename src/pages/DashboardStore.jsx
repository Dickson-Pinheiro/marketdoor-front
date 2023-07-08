import styled from 'styled-components'
import productApi from '../services/productApi'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import CardProduct from '../components/CardProduct'
import Modal from '../components/Modal'
import { FaPlus } from 'react-icons/fa'
import NoProduct from '../components/NoProduct'
import Spinner from '../components/Spinner'
import ProductForm from '../components/ProductForm'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination'

export default function DashboardStore() {
    const { getProducts } = productApi()
    const [products, setProducts] = useState()
    const [updateProducts, setUpdateProducts] = useState(false)
    const [current, setCurrent] = useState(1)
    const [count, setCount] = useState()
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    let shouldShowToast = true;

    useEffect(() => {
        async function pullProducts() {
            try {
                const response = await getProducts(current)
                console.log('response', response)
                setProducts([...response.products])
                setCount(response.count.store_id)
            } catch (error) {
                console.log(error)
                switch (error.response.status) {
                    case 401:
                        if (shouldShowToast) {
                            shouldShowToast = false
                            toast('É necessário fazer login novamente.')
                            navigate('/store/login')
                        }
                }
            }
        }
        pullProducts()
    }
        , [updateProducts])

    function openModal() {
        setOpen(!open)
    }

    return (
        <ContainerDashBoardStore>
            <ContainerMain>
                <AsideContent>
                    <h1>Dashboard</h1>
                </AsideContent>
                <ContainerContent>
                    <ContainerTitle>
                        <p>Aqui você pode criar e gerenciar novos produtos para a sua loja!</p>
                    </ContainerTitle>
                    {products === undefined ? <Spinner /> : (
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
                    {count ? <Pagination updateProducts={updateProducts} setUpdateProducts={setUpdateProducts} count={count} setCurrent={setCurrent} current={current} /> : ''}
                </ContainerContent>
            </ContainerMain>
            <Modal open={open} setOpen={setOpen}><ProductForm setUpdateProducts={setUpdateProducts} updateProducts={updateProducts} open={open} setOpen={setOpen} /></Modal>
            <AddProduct onClick={openModal}><FaPlus size={30} color='#FFFFFF' /></AddProduct>
            <FooterDash></FooterDash>
        </ContainerDashBoardStore>
    )
}

const ContainerContent = styled.div`
    padding: 12px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
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
    display: flex;
    flex-direction: column;
`

const ContainerProducts = styled.div`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    width: 100%;
    max-width: 950px;
    margin: 0 auto;
    min-height: 500px;
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
const AsideContent = styled.aside`
    width: 300px;
    background-color: #1a1811;
    min-height: 100vh;
    padding: 12px;
    h1 {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 28px;
        color: #d8d6d6;
    }
`

const ContainerMain = styled.div`
    display: flex;
    gap: 30px;
`

const FooterDash = styled.footer`
    width: 100%;
    height: 120px;
    background-color: #FFB800;
`