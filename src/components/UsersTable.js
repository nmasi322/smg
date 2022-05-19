import React from 'react'

const UsersTable = (props, {spinner}) => {
    if (spinner === "true"){

    }else{

    }
  return (
    <div className='hover:cursor-pointer'>
    <div className='flex text-[#505050] shadow-md rounded-md px-3 mb-5'>
    <div className='md:grid grid-cols-10 my-4 content-start'>
            <div className='flex col-span-1'>
                <input className='mr-3 mt-[5px] hover:cursor-pointer' type="checkbox" />
                <p className='text-[#A8A8A8]'>{props.id}</p>
            </div>
            <div className='col-span-1'>
                <p>{props.title}</p>
            </div>
            <div className='col-span-4'>
                <div className='flex'> 
                    <img className='rounded-full mr-3 w-10' src={props.img} alt="profile image" />
                    <div className='block'>
                        <div className='flex text-[#9991E5]'>
                            <p className='mr-1'>{props.firstName}</p>
                            <p>{props.lastName}</p>
                        </div>
                        
                        <p className='text-[#A8A8A8] text-sm'>@{props.username}</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1'> 
                <p>{props.id}</p>
            </div>
            <div className='col-span-2'>
                <p>{props.phone}</p>
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

export default UsersTable