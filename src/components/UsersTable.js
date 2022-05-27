import React, { useState } from 'react'
import Axios from 'axios'
import UserDetails from './UserDetails';
// import "../App.css"

const UsersTable = ({ users, loading, error }) => {
    const [posts, setPosts] = useState();

    async function handleClicked(id) {

        // we would implement the api call whenever we clicked on any items....
        try {
            const { data } = await Axios.get(`https://dummyjson.com/users/${id}`)
            setPosts(data);
        } catch (error) {
            console.log(error)
        }

    }
    if (loading) {
        return <>
            <p className='text-center mt-30'>Data is being fetched please wait......</p>
        </>
    }
    if (error) {
        return <p className='text-center mt-30 text-red-600'>{error}</p>
    }
    else {
        return (
            <>
                {
                    users?.map((item) => {

                        return <div className='hover:cursor-pointer' key={item?.id} onClick={() => handleClicked(item?.id)}>
                            <div className='flex text-[#505050] shadow-md rounded-md px-3 mb-5'>
                                <table className="w-full">
                                <thead>
                                <tr>
                                    <td className="flex mb-4 w-10">
                                        <input className='mr-3 mt-[5px] hover:cursor-pointer' type="checkbox" />
                                        <p className='text-[#A8A8A8]'>{item?.id}</p>
                                    </td>
                                    <td>
                                        <p>{item?.gender === "male" ? "Mr" : "Mrs"}</p>
                                    </td>
                                    <td className="flex">
                                        <img className='rounded-full mr-3 w-10' src={item?.image} alt="profile_image" />
                                        <div className='block'>
                                            <div className='flex text-[#9991E5]'>
                                                <p className='mr-1'>{item?.firstName}</p>
                                                <p>{item?.lastName}</p>
                                            </div>

                                            <p className='text-[#A8A8A8] text-sm'>@{item?.username}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{item?.id}</p>
                                    </td>
                                    <td>
                                        <p>{item?.phone}</p>
                                    </td>
                                    <td className="py-5 hover:cursor-pointer">
                                        <div className='w-1 h-1 bg-[#352E4D] mb-1 rounded-full'></div>
                                        <div className='w-1 h-1 bg-[#352E4D] mb-1 rounded-full'></div>
                                        <div className='w-1 h-1 bg-[#352E4D] mb-1 rounded-full'></div>
                                    </td>
                                </tr>
                                </thead>
                                </table>
                            </div>
                        </div>

                    })
                }
                {
                    posts && Object.keys(posts).length > 0 && <UserDetails user={posts} />
                }
            </>

        )
    }

}

export default UsersTable