import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UsersTable from './UsersTable'
import TableTitle from './TableTitle'

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    useEffect(() => {
        async function getUsersData() {
            try {
                let usersUrl = 'https://dummyjson.com/users?limit=5'
                const { data } = await axios.get(usersUrl)
                setUsers(data.users)
                setLoading(false)

            } catch (error) {
                setLoading(false)
                setError(error?.message);

            }
        }
        getUsersData()
    }, [])
    return (
        <div>
            <TableTitle />
            <UsersTable users={users} loading={loading} error={error} />
        </div>
    )
}

export default Users