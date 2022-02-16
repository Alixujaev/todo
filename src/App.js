import { useState } from "react";
import { Route, Routes } from "react-router";
import { v4 } from "uuid";
import Header from "./components/Header";
import Liked from "./components/Liked";
import Main from "./components/Main";

function App() {
  const [arr, setArr] = useState([])
  const [value, setValue] = useState('')
  const [liked, setLiked] = useState([])


 const handlePost = () => {
  setValue('')
    if(value){
      setArr([...arr, {id: v4(), body: value, like: false}])
    }
 }


 const handleLiked = (item) => {
   arr.map(el => {
     if(el.id === item.id){
       return setLiked([...liked, item])
      }
    })
    item.like = true
 }

 const removeLiked = (item) => {
   const newLiked = liked.filter(el => el.id !== item.id)
   item.like = false
   setLiked(newLiked)
 }

 const deleteList = (item) => {
   const newArr = arr.filter(e => e.id !== item.id)
   setArr(newArr)
   if(item.like){
     return setLiked(newArr)
   }else {
     return ''
   }
 }



  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path={`/`} element={<Main 
            liked={liked}
            handleLiked={handleLiked}
            removeLiked={removeLiked}
            deleteList={deleteList} 
            arr={arr} 
            handlePost={handlePost} 
            value={value} 
            setValue={setValue}/>}/>
        <Route path={`/liked`} element={<Liked handleLiked={handleLiked} deleteList={deleteList} liked={liked} removeLiked={removeLiked}/>}/>
      </Routes>
    </div>
  );
}

export default App;
