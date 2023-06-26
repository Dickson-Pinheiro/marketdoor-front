import axios from 'axios'

export default function storeApi(){
    const api = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL, headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    const services = {
        async loginStore(username, password){
            const response = await api.post('/store/login', {username, password})
            return response.data
        }     
    }

    return services;
}