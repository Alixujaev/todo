import React from 'react'
import Form from './Form'
import List from './List'

const Main = ({setValue, value, arr, liked, handlePost, deleteList, handleLiked, removeLiked, setNewValue, newValue, changeValue}) => {


  return (
    <div className='main'>
      <Form setValue={setValue} value={value} handlePost={handlePost} newValue={newValue} setNewValue={setNewValue}/>
      <List liked={liked} changeValue={changeValue} handleLiked={handleLiked} arr={arr} deleteList={deleteList} removeLiked={removeLiked}/> 
    </div>
  )
}

export default Main