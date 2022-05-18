import React from 'react'

const Posts = () => {
    let posts
    let postsUrl = 'https://jsonplaceholder.typicode.com/posts'
    const url = "http://localhost:3000"
    axios.get(`${url}/posts`, (req, res)=>{
        fetch(postsUrl)
        .then(response => response.json())
        .then(data => {
            posts = data
            res.status(200).send(posts)
        })
        .catch(err =>{
            console.log(err);
        })
    })

  return (
    <div>
    
    </div>
  )
}

export default Posts