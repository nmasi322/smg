import React from 'react'

const PostTableTitle = () => {
  return (
    <div>
        <div className='md:grid grid-cols-10 my-5 text-[#505050]'>
            <div className='flex col-span-1'>
                <input className='mr-3 mt-[5px] hover:cursor-pointer' type="checkbox" />
                <p>ID</p>
            </div>
            <div className='col-span-1'>
                <p>OWNER ID</p>
            </div>
            <div className='col-span-4'>
                <p>TITLE</p>
            </div>
            <div className='col-span-2'>
                <p>PUBLISH DATE</p>
            </div>
        </div>
    </div>
  )
}

export default PostTableTitle