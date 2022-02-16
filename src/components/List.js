import React from 'react'

const List = ({arr, deleteList, handleLiked, removeLiked, changeValue}) => {


    const textSetting = (str) => {
      if(str.length > 40){
        return str = `${str.substring(0, 20)}...`
      }else {
        return str
      }
    }

    console.log(arr);

  return (
    <div className='list'>
      {arr.length ? (
        arr.map((item, index) => {
          return (
          <h2 key={index} className='list_title'>
            {textSetting(item.body)} 
            <span className='icons'>
              <i onClick={() => deleteList(item)} className="material-icons delete">delete</i> 
             {item.like ?  <i className="material-icons liked" onClick={() => removeLiked(item)}>favorite</i> : <i className="material-icons liked" onClick={() => handleLiked(item)}>favorite_border</i>} 
              </span>
          </h2>)
        })
      ): <h2 className='nothing'>Nothing found!</h2>}
    </div>
  )
}

export default List