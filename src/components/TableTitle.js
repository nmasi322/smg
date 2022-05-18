import React from 'react'

const TableTitle = () => {
  return (
    <div>
        <div className='md:grid grid-cols-5 my-5 text-[#505050]'>
            <div className='flex'>
                <input className='mr-3 mt-[5px] hover:cursor-pointer' type="checkbox" />
                <p>ID</p>
            </div>
            <div>
                <p>TITLE</p>
            </div>
            <div>
                <p>NAME</p>
            </div>
            <div>
                <p>ID</p>
            </div>
            <div>
                <p>PHONE</p>
            </div>
        </div>
    </div>
  )
}

export default TableTitle