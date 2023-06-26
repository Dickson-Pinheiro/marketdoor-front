import axios from 'axios'

export default function productApi() {
    const api = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL, headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    const services = {
        async createProduct(name, description, image_url, by_weight, active, price, category_id) {
            const response = await api.post('/product', {
                name,
                description,
                image_url,
                by_weight,
                active,
                price,
                category_id
            })
            return response.data
        },

        async getProducts(){
            const response = await api.get('/product')
            return response.data
        }
    }

    return services;
}