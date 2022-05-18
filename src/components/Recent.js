// import { dblClick } from '@testing-library/user-event/dist/click';
import React, {useState} from 'react'
import TableTitle from './TableTitle';
import Users from './Users';
import UsersTable from './UsersTable';

const Recent = () => {
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
        <div className="">
            <div className="">
            {/* <TableTitle /> */}
                {/* <UsersTable id="jdndcch" title="Mrs" name="Divine Edeh" username="divine_edeh" phone="07049958957" img="/image/Ellipse 8.png" /> */}
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
                    recent === 1 ? <div className="table">
                    <UsersTable id="jdndcch" title="Mrs" name="Divine Edeh" username="divine_edeh" phone="07049958957" img="/image/Ellipse 8.png" />
                    </div>
                        : <>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime voluptatibus pariatur accusantium reiciendis, error fugit.
                            </p>
                        </>
                }

            </div>
    </div>
  )
}

export default Recent