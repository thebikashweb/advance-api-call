import HttpClient from './HttpClient'
import backendconstat from './backendconstant'

const {users}=backendconstat

//export API call for users route

export default {

    //get all users
    getAllusers(){       
        return HttpClient.get(users)
    },
    //get user by Id
    getUserById(id:number){
        return HttpClient.get(`${users}/${id}`)
    },
    // create a user
    create(payload:{}){
        return HttpClient.post(users,payload)
    }
}