import React from 'react'

const TableTitle = () => {
  return (
    <div>
        <div className='grid grid-cols-10 my-5 text-[#505050]'>
            <div className='flex col-span-1'>
                <input className='mr-3 mt-[5px] hover:cursor-pointer' type="checkbox" />
                <p>ID</p>
            </div>
            <div className='col-span-1'>
                <p>TITLE</p>
            </div>
            <div className='col-span-4'>
                <p>NAME</p>
            </div>
            <div className='col-span-1'>
                <p>ID</p>
            </div>
            <div className='col-span-2'>
                <p>PHONE</p>
            </div>
        </div>
    </div>
  )
}

export default TableTitle