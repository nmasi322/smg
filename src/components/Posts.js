import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PostTableTitle from './PostTableTitle'
import PostsTable from './PostsTable'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    useEffect(()=>{
        async function getPostData(){
            try {
                let postsUrl = 'https://dummyjson.com/posts'
                const {data} = await axios.get(postsUrl)
                setPosts(data.posts)
                setLoading(false)

            } catch (error) {
                setLoading(false)
                setError(error?.message);

            }
        }
        getPostData()
    }, [])


  return (
    <div>
        <PostTableTitle />
        <PostsTable posts={posts} loading={loading} error={error} />
    </div>
  )
}

export default Posts