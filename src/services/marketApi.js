import axios from 'axios'

export default function marketApi(){
    const api = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL, headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    const services = {
        async createMarket(name, email, password){
            const response = await api.post('/market/signup', {name, email, password})
            return response.data
        },
        async loginMarket(email, password){
            const response = await api.post('/market/login', {email, password})
            return response.data
        },
        async getStores(){
            const response = await api.get('/market/store')
            return response.data
        },
        async createStore(name, username, password){
            const response = await api.post('/market/store', {name, username, password})
            console.log(response)
            return response.data
        }        
    }

    return services;
}