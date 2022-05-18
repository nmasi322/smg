import React from 'react'

const UsersTable = (props) => {
  return (
    <div>
    <div className='flex text-[#505050] shadow-md rounded-md px-3 mb-5'>
    <div className='md:grid grid-cols-5 my-5'>
            <div className='flex'>
                <input className='mr-3 mt-[5px] hover:cursor-pointer' type="checkbox" />
                <p className='text-[#A8A8A8]'>{props.id}</p>
            </div>
            <div>
                <p>{props.title}</p>
            </div>
            <div>
                <div className='flex'>
                    <img className='rounded-full mr-3 w-full' src={props.img} alt="profile image" />
                    <div className='block'>
                        <p className='text-[#9991E5]'>{props.name}</p>
                        <p className='text-[#A8A8A8] text-sm'>@{props.username}</p>
                    </div>
                </div>
            </div>
            <div> 
                <p>{props.id}</p>
            </div>
            <div>
                <p>{props.phone}</p>
            </div>
        </div>
        <div className='py-5 hover:cursor-pointer'>
            <div className='w-1 h-1 bg-[#352E4D] mb-1 rounded-full'></div>
            <div className='w-1 h-1 bg-[#352E4D] mb-1 rounded-full'></div>
            <div className='w-1 h-1 bg-[#352E4D] mb-1 rounded-full'></div>
            </div>
    </div>
    </div>
  )
}

export default UsersTable