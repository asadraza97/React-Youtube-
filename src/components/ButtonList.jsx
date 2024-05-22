import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { setCatogery } from '../slice/appSlice';

const buttonList = ["All", "News",  "JavaScript", "C++" , "Live" , "Music","Mantras"," Sales","Vlogs"," Cricket"," New", "Trending","Song","Comedy", "Thriller", "New to you", "Computer Programimg", "Chai aur code","Netlify", "Coding" ]

const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch()

  const videoByTag = (tag)=>{
    if(active!==tag){
      dispatch(setCatogery(tag))
      setActive(tag);
    }
  }
  console.log(active);
      return (
  <div className=' flex w-full py-2 overflow-x-scroll no-scrollbar my-1'>
       { buttonList.map((buttonName, index) =>{ 
        return(
          <div>

            <button onClick={()=>{videoByTag(buttonName)}} key={buttonName} className={`${active == buttonName ? "bg-slate-900 text-white" : " bg-gray-100"}  font-medium w-fit px-3 py-2 mx-1 cursor-pointer rounded-lg`}> <span className=' whitespace-nowrap'>{buttonName}</span> </button>

          </div>
        )
       })}
        
    </div> 
  )
}

export default ButtonList
