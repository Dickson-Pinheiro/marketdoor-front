import axios from 'axios'

export default function categoryApi(){
    const api = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL, headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    const services = {
        async getCategories(){
            const response = await api.get('/category')
            return response.data
        },        
    }

    return services;
}