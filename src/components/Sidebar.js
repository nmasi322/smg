import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <div class="bg-gradient-to-b from-[#9F96EF] to-[#5F5888] h-[100vh] py-10 px-5 fixed">
        <div className='flex'>
          <img className='w-16 roundedd-full mr-5' src='/image/profile.png' />
          <div className='text-white'>
            <h2 className='font-bold text-lg'>User Groove</h2>
            <p>by DivineFavour Edeh</p>
          </div>
        </div>
        <div className='text-white mt-10'>
        <div>
          <div className='px-5'>
              <img className='inline mr-3' src='/image/vector.png' />
              <p className='inline'>Home</p>
          </div>
          <div className='mt-7'>
            <p className='text-[#E9E7FF] py-3 border-b border-b-[#e8e8e8]'>DIRECTORY</p>
            <ul>
              <Link to="/dashboard" className='bg-[#e5e5e5] bg-opacity-50 text-white py-2 w-full block mt-3 px-3'>Dashboard</Link>
              <Link to="/search-posts" className='text-white py-2 w-full block mt-3 px-3'>Search posts</Link>
              <Link to="/add-user" className='text-white py-2 w-full block mt-3 px-3'>Add user</Link>
            </ul>
          </div>
        </div>
        </div>
        <div className='absolute bottom-5 left-5 right-5'>
          <div className='border-t border-t-[#d0d0d0] block py-4 w-full'>
            <img className="mr-3 inline" src='/image/vector (1).png' />
            <p className='text-white inline hover:cursor-pointer'>Settings</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar