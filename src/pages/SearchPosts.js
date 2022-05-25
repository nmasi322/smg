import React, {useState} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SearchPost from '../components/SearchPosts'

const SearchPosts = () => {
  const [show, setShow] = useState("hide")
  function showHandler (){
    if (show === "show"){
        setShow("hide")
    }if (show === "hide"){
        setShow("show")
    }
  }
  return (
    <div>
      <div className='md:grid grid-cols-5 gap-0'>
      <div className='col-span-1 relative'>
            <div className='md:hidden mr-3' onClick={showHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className={`${show === "hide" ? "hidden md:block" : "block"}`}>
                <Sidebar />
            </div>
            </div>
            <div className='col-span-4 w-full'>
              <Header pageTitle="Dashboard > Search" />
              <div className='py-4 shadow-lg px-7 md:text-center'>
                <input className='outline-none rounded-full py-2 px-4 w-72 md:w-96 border border-gray-400' type="search" placeholder="Search any user..." />
              </div>
              <div className='px-3'>
                <SearchPost />
              </div>
            </div>
      </div>
    </div>
  )
}

export default SearchPosts