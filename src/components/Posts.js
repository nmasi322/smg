import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PostTableTitle from './PostTableTitle'
import PostsTable from './PostsTable'

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        async function getPostData(){
            try {
                let postsUrl = 'https://dummyjson.com/posts?limit=5'
                const {data} = await axios.get(postsUrl)
                setPosts(data.posts)
            } catch (error) {
                console.log(error);
            }
        }
        getPostData()
    }, [])

  return (
    <div>
        <PostTableTitle />
            {   
                posts.map(item=>{
                    return <PostsTable id={item.id} owner={item.userId} title={item.title} />
                })
            }
    </div>
  )
}

export default Posts