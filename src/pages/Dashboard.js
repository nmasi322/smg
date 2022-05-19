import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
import Tags from '../components/Tags'
// import UserDefault from '../components/UserDefault'
// import UserDetails from '../components/UserDetails'
import UserPostDetails from '../components/UserPostDetails'

const Dashboard = () => {
  return (
    <div>
        <div className='md:grid grid-cols-5'>
            <div className='col-span-1'>
                <Sidebar />
            </div>
            <div className='col-span-4'>
                <Header pageTitle="Dashboard" />
                <div className='px-16 py-10'>
                    <div className='md:grid grid-cols-5 gap-3'>
                        <div className='col-span-2'>
                            <div className='md:grid grid-cols-2 gap-3'>
                                <div>
                                    <Card bg="#9991E5" text="white" title="Users" number="100" />
                                </div>
                                <div>
                                    <Card text="[#505050]" title="Posts" number="60" />
                                </div>
                                <div>
                                    <Card text="[#505050]" title="Comments" number="307" />
                                </div>
                                <div>
                                    <Card text="[#505050]" title="Tags" number="21" />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='shadow-md p-5 rounded-md'>
                                <h2 className='text-lg font-bold text-[#505050]'>Popular Tags</h2>
                                <div className='md:grid grid-cols-2 gap-3 py-4'>
                                    <Tags borderColor="#9F96EF" textColor="#9991E5" tag="Dog" tagCount="345" />
                                    <Tags textColor="#505050" bgColor="#f0f0f0" tag="Water" tagCount="20" />
                                    <Tags textColor="#505050" bgColor="#f0f0f0" tag="Nature" tagCount="18" />
                                    <Tags textColor="#505050" bgColor="#f0f0f0" tag="Private info requests" tagCount="17" />
                                    <Tags textColor="#505050" bgColor="#f0f0f0" tag="Winter" tagCount="12" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:grid grid-cols-4 gap-3 mt-16'>
                        <div className='col-span-3'>
                            <div>
                                <Table />
                            </div>
                        </div>
                        <div>
                            <div className='shadow-md rounded-md'>
                                <UserPostDetails />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
// 
export default Dashboard