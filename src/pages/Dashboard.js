import React,{useState} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
import Tags from '../components/Tags'

const Dashboard = () => {
    const [show, setShow] = useState("hide")
  function showHandler (){
    if (show === "show"){
        setShow("hide")
    }if (show === "hide"){
        setShow("show")
    }
  }
  return (
    <div>
        <div className='md:grid grid-cols-5'>
            <div className='col-span-1 relative'>
            <div className='md:hidden mr-3' onClick={showHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className={`${show === "hide" ? "hidden md:block" : "block"}`}>
                <Sidebar />
            </div>
            </div>
            <div className='col-span-4'>
                <Header pageTitle="Dashboard" />
                <div className='px-9 md:px-16 py-10'>
                    <div className='md:grid grid-cols-5 gap-3'>
                        <div className='col-span-2'>
                            <div className='md:grid grid-cols-2 gap-3'>
                                <div>
                                    <div className="shadow-md rounded-md px-7 py-5 bg-[#9991E5] text-white hover:cursor-pointer mb-3 md:mb-0">
                                        <p>Users</p>
                                        <h2 className='font-extrabold text-3xl pt-3'>100</h2>
                                    </div>
                                </div>
                                <div>
                                <div className="shadow-md rounded-md px-7 py-5 text-[#505050] hover:cursor-pointer mb-3 md:mb-0">
                                        <p>Posts</p>
                                        <h2 className='font-extrabold text-3xl pt-3'>60</h2>
                                    </div>
                                </div>
                                <div>
                                <div className="shadow-md rounded-md px-7 py-5 text-[#505050] hover:cursor-pointer mb-3 md:mb-0">
                                        <p>Comments</p>
                                        <h2 className='font-extrabold text-3xl pt-3'>307</h2>
                                    </div>
                                </div>
                                <div>
                                <div className="shadow-md rounded-md px-7 py-5 text-[#505050] hover:cursor-pointer mb-3 md:mb-0">
                                        <p>Tags</p>
                                        <h2 className='font-extrabold text-3xl pt-3'>21</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='shadow-md p-5 rounded-md mt-10 md:mt-0'>
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
                    <div className='mt-16'>
                        <div>
                            <div>
                                <Table />
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