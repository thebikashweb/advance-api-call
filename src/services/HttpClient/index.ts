import axios from 'axios'

//attach authorization token and other common stuffs

let token=''
token = localStorage.getItem('token') || ''

export default axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers:{
        Authorization:`Bearer ${token}`
    }
})
