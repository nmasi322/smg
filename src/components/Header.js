import React from 'react'

const Header = (props) => {
  return (
    <div className='shadow-lg w-full flex py-5 px-7 relative'>
        <h2 className='text-[#787878]'>{props.pageTitle}</h2>
        <div className='absolute right-7 flex'>
            <img className='w-6 h-6 mr-7 hover:cursor-pointer' src="/image/vector (2).png" />
            <img className='w-10 h-10 p-0 -m-2 hover:cursor-pointer' src='/image/profile.png' />
        </div>
    </div>
  )
}

export default Header