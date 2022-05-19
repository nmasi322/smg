import React, {useEffect, useState} from 'react'
import axios from 'axios'
import UsersTable from './UsersTable'
import TableTitle from './TableTitle'

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        async function getUsersData(){
            try {
                let usersUrl = 'https://dummyjson.com/users?limit=5'
                const {data} = await axios.get(usersUrl)
                setLoading(false)
                if (loading == false){
                    setUsers(data.users)
                }
            } catch (error) {
                setLoading(false)
                console.log(error);
            }
        }
        getUsersData()
    }, [])
  return (
    <div>
        {
            if(loading){
                return <h2>Data is coming ...</h2>
            }
        }
        <TableTitle />
        {   
            users.map(item=>{
                let title
                if (item.gender === "female"){
                    title = "Mrs"
                }if (item.gender === "male"){
                    title = "Mr"
                }
                return <UsersTable firstName={item.firstName} lastName={item.lastName} img={item.image} title={title} id={item.id} name={item.name} username={item.username} phone={item.phone} />
            })
        }
    </div>
  )
}

export default Users