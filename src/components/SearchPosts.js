import React, { useState, useEffect } from 'react'
import PostTableTitle from './PostTableTitle'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import "../App.css"

const SearchPost = () => {
    const [posts, setPosts] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
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

    const postsPerPage = 10
    const pagesVisited = pageNumber * postsPerPage
    const displayPosts = posts.slice(pagesVisited, pagesVisited + postsPerPage).map(item =>{
        return <div className='hover:cursor-pointer'>
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
    const pageCount = Math.ceil(posts.length / postsPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    if (loading) {
        return <>
            <p className='text-center mt-52'> Data is being fetched please wait......</p>
        </>
    }
    if (error) {
        return <p className='text-center mt-30 text-red-600'>{error}</p>
    }
    else{
        return (
            <div>
            <PostTableTitle />
            { displayPosts }
            <div className='flex'>
                <ReactPaginate previousLabel={"Prev"} nextLabel={"Next"} pageCount={pageCount} onPageChange={changePage} pageLinkClassName={"pageLink"} containerClassName={`paginationBtns`} previousLinkClassName={"previousBtn"} nextLinkClassName={"nextBtn"} disabledClassName={"paginationDisabled"} activeClassName={"paginationActive"} />
            </div>
        </div>
    )
}}

export default SearchPost