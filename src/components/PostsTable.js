import React from 'react'

const PostsTable = (props) => {
  return (
    <div className='hover:cursor-pointer'>
        <div className='flex text-[#505050] shadow-md rounded-md px-3 mb-5'>
        <div className='md:grid grid-cols-10 gap-2 my-4'>
            <div className='flex col-span-1'>
                <input className='mr-3 mt-[5px] hover:cursor-pointer' type="checkbox" />
                <p className='text-[#A8A8A8]'>{props.id}</p>
            </div>
            <div className='col-span-1'>
                <p>{props.owner}</p>
            </div>
            <div className='col-span-5'>
                <p>{props.title}</p>
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
  )
}

export default PostsTable