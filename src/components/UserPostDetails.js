import React, {useState} from 'react'
import Posts from './Posts';
import UserDefault from './UserDefault';
import UserDetails from './UserDetails';
// import Users from './Users';

const UserPostDetails = () => {
    const details = [
        {
            component: <UserDefault />,
            id: 1
        },
        {
            component: <UserDetails />,
            id: 2
        },
    ]
    const [page, setPage] = useState(1);
    function handleClicked(value) {
        setPage(value)
    }
    let id = details.map(item=>{
        return item.id
    })
  return (
    <div>
    {/* <UserDetails/> */}
        {/* <div>
            <div className={id === page ? "active" : ""} onClick={() => handleClicked(id)}>heyZ!</div> 
        </div> */}
        {/* {
            page === 1 ? 
            <div>
                <UserDefault />
            </div>
                : <div>
                    <UserDetails />
                </div>
        } */}
    </div>
  )
}

export default UserPostDetails