import React, { useState } from 'react'
import Axios from 'axios'
import PostDetails from './PostDetails'
 
const PostsTable = ({ posts, loading, error }) => {
    const [post, setPost] = useState()

    async function handleClicked(id) {
        // we would implement the api call whenever we clicked on any items....
        try {
            const { data } = await Axios.get(`https://dummyjson.com/posts/${id}`)
            setPost(data);
        } catch (error) {
            console.log(error)
        }

    }
    if (loading) {
        return <>
            <p className='text-center mt-30'> Data is being fetched please wait......</p>
        </>
    }
    if (error) {
        return <p className='text-center mt-30 text-red-600'>{error}</p>
    }
    else{
        return (
            <>
                {
                    posts.slice(0, 5).map(item =>{
                        return <div className='hover:cursor-pointer' key={item?.id} onClick={() => handleClicked(item?.id)}>
                        <div className='flex text-[#505050] shadow-md rounded-md px-3 mb-5'>
                        <div className='grid grid-cols-10 gap-2 my-4'>
                            <div className='flex col-span-1'>
                                <input className='mr-3 mt-[5px] hover:cursor-pointer' type="checkbox" />
                                <p className='text-[#A8A8A8]'>{item?.id}</p>
                            </div>
                            <div className='col-span-1'>
                                <p>{item?.userId}</p>
                            </div>
                            <div className='col-span-4'>
                                <p>{item?.title}</p>
                            </div>
                            <div className='col-span-3'>
                                <p>OCT, 2003</p>
                            </div>
                        </div>
                        <div className='py-5 hover:cursor-pointer col-span-1'>
                            <div className='w-1 h-1 bg-[#352E4D] mb-1 rounded-full'></div>
                            <div className='w-1 h-1 bg-[#352E4D] mb-1 rounded-full'></div>
                            <div className='w-1 h-1 bg-[#352E4D] mb-1 rounded-full'></div>
                            </div>
                    </div>
                    </div>
                    })
                }
                {
                    post && Object.keys(post).length > 0 && <PostDetails post={post} />
                }
            </>
          )
    }
  
}

export default PostsTable