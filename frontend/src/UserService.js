import axios from 'axios'
const API_URL = 'http://localhost:8000'

export default class UserService{

    async getUsers(){
        const url = `${API_URL}/api/users/`
        const response = await axios.get(url)
        
        return response.data
    }

    async getUser(pk){
        const url = `${API_URL}/api/users/${pk}`
        const response = await axios.get(url)
        return response.data
    }

    async createUser(user_data){
        console.log(user_data)
        const url = `${API_URL}/api/users/`
        return axios.post(url, user_data)
    }

    async updateUser(user_data){
        const url = `${API_URL}/api/users/${user_data.id}`
        return axios.put(url, user_data)
    }

    async deleteUser(user){        
        const url = `${API_URL}/api/users/${user}`
        return axios.delete(url)
    }
}