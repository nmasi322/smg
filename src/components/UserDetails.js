
const UserDetails = ({ user }) => {
  console.log(user)

  return (
    <div>
      <div className='grid grid-cols-2 gap-3 p-3 border-b border-b-gray-400'>
        <div className='bg-emerald-200 rounded-lg shadow-md'>
          <img className='w-[50%] mx-auto' src={user.image} alt='' />
        </div>
        <div>
          <div className='py-2 border-b border-b-gray-400'>
            <h2 className='text-[#AFC2D4] text-sm'>FULL NAME</h2>
            <div className='flex text-[#051A2E] text-lg capitalize'>
              <p className='mr-1'>{user.firstName}</p>
              <p>{user.lastName}</p>
            </div>
          </div>
          <div className='py-2 border-b border-b-gray-400'>
            <h2 className='text-[#AFC2D4] text-sm'>EMAIL ADDRESS</h2>
            <p className='mr-1'>{user.email}</p>
          </div>
          <div className='py-2'>
            <h2 className='text-[#AFC2D4] text-sm'>PHONE NUMBER</h2>
            <p className='mr-1'>{user.phone}</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-3 p-3 border-b border-b-gray-400'>
        <div>
          <div>
            <h2 className='text-[#AFC2D4] text-sm'>GENDER</h2>
            <p className='text-[#051A2E] text-lg capitalize'>{user.gender}</p>
          </div>
        </div>
        <div>
          <div>
            <h2 className='text-[#AFC2D4] text-sm'>DATE OF BIRTH</h2>
            <p className='mr-1'>{user.birthDate}</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-3 p-3 border-b border-b-gray-400'>
        <div>
          <div className='pb-8'>
            <h2 className='text-[#AFC2D4] text-sm'>STREET</h2>
            <p className='text-[#051A2E] text-lg capitalize'>{user.address.address}</p>
          </div>
          <div>
            <h2 className='text-[#AFC2D4] text-sm'>STATE</h2>
            <p className='text-[#051A2E] text-lg capitalize'>{user.address.state}</p>
          </div>
        </div>
        <div>
          <div>
            <h2 className='text-[#AFC2D4] text-sm'>CITY</h2>
            <p className='mr-1'>{user.address.city}</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-3 p-3 border-b border-b-gray-400'>
        <div>
          <div>
            <h2 className='text-[#AFC2D4] text-sm'>POSTS</h2>
            {/* <p className='text-[#051A2E] text-lg capitalize'>{userPostCount}</p> */}
          </div>
        </div>
        <div>
          <div>
            <h2 className='text-[#AFC2D4] text-sm'>COMMENTS</h2>
            <p className='mr-1'>{user.birthDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails


