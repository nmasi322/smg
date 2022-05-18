import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className={`shadow-md rounded-md px-7 py-5 bg-[${props.bg}] text-${props.text} hover:cursor-pointer`}>
            <p>{props.title}</p>
            <h2 className='font-extrabold text-3xl pt-3'>{props.number}</h2>
        </div>
    </div>
  )
}

export default Card