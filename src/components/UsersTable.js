import React, { useState, useEffect } from 'react'
import UserPostDetails from './UserPostDetails';

const UsersTable = ({ users, loading, error }) => {
    const [clicked, setClicked] = useState(false)
    const [current, seCurrent] = useState()
    function handleClicked(id) {
        console.log(`clicked ${id}`);
        seCurrent(id)
        setClicked(true)
    }
    useEffect(() => {
        async function setId() {
            try {
                if(clicked){
                    return <UserPostDetails id={current} />
                }

            } catch (error) {
                console.log(error);

            }
        }
        setId()
    }, [])
    
    
    
    if (loading) {
        return <>
            <p className='text-center justify-center items-center mt-20'> Please wait, data is being fetched.....</p>
        </>
    }
    if (error) {
        return <p className='text-center justify-center items-center mt-20'>{error}</p>
    }
    else {
        return (
            <>
                {
                    users?.map((item) => {

                        return <div className='hover:cursor-pointer' key={item?.id} onClick={() => handleClicked(item?.id)}>
                            <div className='flex text-[#505050] shadow-md rounded-md px-3 mb-5'>
                                <div className='md:grid grid-cols-10 my-4 content-start'>
                                    <div className='flex col-span-1'>
                                        <input className='mr-3 mt-[5px] hover:cursor-pointer' type="checkbox" />
                                        <p className='text-[#A8A8A8]'>{item?.id}</p>
                                    </div>
                                    <div className='col-span-1'>
                                        <p>{item?.gender === "male" ? "Mr" : "Mrs"}</p>
                                    </div>
                                    <div className='col-span-4'>
                                        <div className='flex'>
                                            <img className='rounded-full mr-3 w-10' src={item?.image} alt="profile image" />
                                            <div className='block'>
                                                <div className='flex text-[#9991E5]'>
                                                    <p className='mr-1'>{item?.firstName}</p>
                                                    <p>{item?.lastName}</p>
                                                </div>

                                                <p className='text-[#A8A8A8] text-sm'>@{item?.username}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-1'>
                                        <p>{item?.id}</p>
                                    </div>
                                    <div className='col-span-2'>
                                        <p>{item?.phone}</p>
                                    </div>
                                </div>
                                <div className='py-5 hover:cursor-pointer col-span-1'>
                                    <div className='w-1 h-1 bg-[#352E4D] mb-1 rounded-full'></div>
                                    <div className='w-1 h-1 bg-[#352E4D] mb-1 rounded-full'></div>
                                    <div className='w-1 h-1 bg-[#352E4D] mb-1 rounded-full'></div>
                                </div>
                            </div>
                        </div>

                    })
                }
            </>

        )
    }

}

export default UsersTable