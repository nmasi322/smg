import PreviousMap from 'postcss/lib/previous-map'
import React from 'react'

const Tags = (props) => {
  return (
    <div>
        <div className={`relative flex shadow-sm rounded-md bg-[${props.bgColor}] border-[0.5px] border-[${props.borderColor}] text-[${props.textColor}] px-4 py-2 hover:cursor-pointer text-sm`}>
            <h3>{props.tag}</h3>
            <p className='absolute right-4'>{props.tagCount}</p>
        </div>
    </div>
  )
}

export default Tags