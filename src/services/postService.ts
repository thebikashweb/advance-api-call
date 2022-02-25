import HttpClient from './HttpClient'
import backendconstat from './backendconstant'

const {posts}=backendconstat

//export API call for posts route

export default {

    //get all posts
    getAllPosts(){       
        return HttpClient.get(posts)
    },
    //get post by Id
    getPostById(id:string){
        return HttpClient.get(`${posts}/${id}`)
    },
    // create a new post
    create(payload:{title:string, body:string}, userId:string){
        return HttpClient.post(posts,{...payload,userId:userId})
    }, 
}