import React from 'react'

const Liked = ({liked, handleLiked, removeLiked}) => {

  const textSetting = (str) => {
    if(str.length > 40){
      return str = `${str.substring(0, 20)}...`
    }else {
      return str
    }
  }


  console.log(liked);
  return (
    <div className='list'>
      {liked.length ? (
        liked.map((item, index) => {
          return (
          <h2 key={index} className='list_title'>
            {item.body ? textSetting(item.body) : 'not'} 
            <span className='icons'>
            {!item.like ? <i className="material-icons liked" onClick={() => handleLiked(item)}>favorite_border</i> : <i className="material-icons liked" onClick={() => removeLiked(item)}>favorite</i>}  
             </span>
          </h2>)
        })
      ): <h2 className='nothing'>Nothing found!</h2>}
    </div>
  )
}

export default Liked