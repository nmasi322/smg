import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserDefault from './UserDefault'
import UserDetails from './UserDetails'

const UserPostDetails = ({id}) => {
    const [page, setPage] = useState(2)
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [userPost, setUserPost] = useState([])
    if (id){
        useEffect(()=>{
            async function getUserData(userId){
                try {
                    let userUrl = `https://dummyjson.com/users/${userId}`
                    const {data} = await axios.get(userUrl)
                    setUser(data)
                    setLoading(false)
                } catch (error) {
                    setLoading(false)
                    setError(error?.message);
                }
            }
            getUserData(id)
        }, [])
        useEffect(()=>{
            async function getUserPostData(userId){
                try {
                    let userPostUrl = `https://dummyjson.com/users/${userId}/posts`
                    const {data} = await axios.get(userPostUrl)
                    setUserPost(data.posts)
                } catch (error) {
                    console.log(error);
                }
            }
            getUserPostData(id)
        }, [])
    }
  return (
    <div>
        {
            page === 1 ? 
            <div>
                <UserDefault />
            </div>
                : 
                <div>
                    <UserDetails user={user} loading={loading} error={error} userPost={userPost} />
                </div>
        }
    </div>
  )
}

export default UserPostDetails