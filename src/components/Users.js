import React, {useState} from 'react'
import axios from 'axios'
import UsersTable from './UsersTable'

const Users = () => {
    const details = [
        {
            name: "Recent Users",
            id: 1
        },
        {
            name: "Recent Posts",
            id: 2
        },
    ]
    const [recent, setRecent] = useState(1);
    function handleClicked(value) {
        setRecent(value)
    }
    let users
    let usersUrl = 'https://jsonplaceholder.typicode.com/users'
    const url = "http://localhost:3000"
    axios.get(`${url}/users`, (req, res)=>{
        fetch(usersUrl)
        .then(response => response.json())
        .then(data => {
            users = data
            res.status(200).send(users)
        })
        .catch(err =>{
            console.log(err);
        })
    })
  return (
    <div>
        <ul >
            {
                details.map((item) => {
                    return <li key={item.id} className={item.id === recent ? "active" : ""} onClick={() => handleClicked(item.id)}>
                        {item.name}
                    </li>
                })
            }
        </ul>
        {
            recent === 1 ? 
            <div>
            {
                users.map(item=>{
                    return <UsersTable id={item.id} name={item.name} username={item.username} phone={item.phone} />
                })
            }
            {/* <UsersTable id="jdndcch" title="Mrs" name="Divine Edeh" username="divine_edeh" phone="07049958957" img="/image/Ellipse 8.png" /> */}
            </div>
                : <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime voluptatibus pariatur accusantium reiciendis, error fugit.
                    </p>
                </div>
        }
    </div>
  )
}

export default Users