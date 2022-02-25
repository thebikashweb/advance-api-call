import React from 'react';

import services from './services'

import './App.css';

type PostType={
  userId:number,
  id:number,
  title:string,
  body:string,
}
type PostsType=Array<PostType>

function App() {

  const postService=services.posts
  const userService=services.users

  const [posts,setPosts]=React.useState<PostsType>([])
  const [loading,setLoading]=React.useState(false)

  const [users, setUsers]=React.useState([])

  //axios request 
  React.useEffect(()=>{
    setLoading(true)
    postService.getAllPosts().then(res=>{
      setPosts(res.data)
      setLoading(false)
    }).catch(error=>{
      console.log(error)
      setLoading(false)
    })


  },[])

  //fetch all users 
  React.useEffect(()=>{
    userService.getAllusers().then(res=>setUsers(res.data))
  },[])
 
  return (
    <div className="App">
      {/* {loading && <h1>Loading..</h1>}

      {!loading && posts && <div className="posts">
        {
          posts.map(post=>(
            <div className="post" key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))
        }

        </div>} */}

        {
          users && <div>
            {
              users.map((user:any)=>(
                <div key={user.id}>
                    <p>{user.name}</p>{user.name}
                </div>
              ))
            }
          </div>
        }

    </div>
  );
}

export default App;
