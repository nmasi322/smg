import React, {useState} from 'react'
import Posts from './Posts';
import Users from './Users'

const Table = () => {
    const [spinner, setSpinner] = useState(false);    

    
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
  return (
    <div>
    <ul className='flex' >
            {
                details.map((item) => {
                    return <li key={item.id} className={`${item.id === recent ? "active" : ""} mr-3 hover:underline-offset-1 hover:underline hover:cursor-pointer`} onClick={() => {
                        handleClicked(item.id)
                        setSpinner(true)
                        }}>
                        {item.name}
                    </li>
                })
            }
        </ul>
        {
            recent === 1 ? 
            <div>
                <Users spinner={spinner} />
            </div>
                : <div>
                    <Posts />
                </div>
        }
    </div>
  )
}

export default Table