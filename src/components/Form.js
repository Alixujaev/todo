import React from 'react'

const Form = ({setValue, value, handlePost}) => {
  return (
    <div className='form'>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)}  placeholder='Something..'/>
        <button onClick={(e) => handlePost()}>Post</button>
    </div>
  )
}

export default Form