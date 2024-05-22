
import React, { useEffect, useState } from "react";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { LuVideo } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from 'react-avatar';
import { LuMic } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setCatogery, setSearchSuggestion, toggleSidebar } from "../slice/appSlice";
import axios  from "axios";
import { SEARCH_SUGGESTION_API } from "../constant/Youtube";
import store from "../store/Store";


const Navbar = () => {
  const [input, setInput] =useState("")
  const [suggestion, setSuggestion] =useState(false)
  const dispatch = useDispatch()
  const {searchSuggestion} = useSelector((store) =>store.app)
  const searchVideo = () =>{
    dispatch(setCatogery(input))
    setInput("")
    console.log(searchVideo, "=======>>");
  }
  const toggleHandler = () =>{
  dispatch(toggleSidebar())
  console.log("clicked");
  }
  const showSuggestion = async() =>{
      try {
        const res = await axios.get(SEARCH_SUGGESTION_API+input)
        dispatch(setSearchSuggestion(res?.data[1]))
      } catch (error) {
        console.log(error);
      }
  }
  const openSuggestion =()=>{
    setSuggestion(true)
  }
  useEffect( ()=>{
   const timer = setTimeout(() => {
     showSuggestion()
    }, 200);
    return()=>{
      clearTimeout(timer)
    } 
  },[input])
  return (
    <div className=" flex fixed justify-center items-center w-[100%] z-10 bg-white top-0">
    <div className="flex justify-between items-center w-[96%] py-1 ">
      <div className="flex items-center ">
        <CiMenuBurger onClick={toggleHandler} className=" cursor-pointer" size={"20px"}/>
        <img  className="cursor-pointer px-3" width={"130px"} src="./src/assets/youtube.jpg" alt="logo" />
      </div>

      <div className="w-[40%] flex items-center ">
        <div className="flex w-[100%]" >
          <input value={input} onFocus={openSuggestion} onChange={(e)=>setInput(e.target.value)} placeholder="Search" type="text" className="w-full outline-none  py-2 px-4  border border-grey-400  rounded-l-full" />
        <button onClick={searchVideo} className="py-2 border px-4 border-gray-400 rounded-r-full"> <CiSearch size={"24px"}/></button>

        </div>

        {/* <button className="py-2 px-4"> <LuMic size={"24px"}/></button> */}
        {
         ( suggestion && searchSuggestion.length !== 0) &&  
          <div className=" absolute top-3 z-50 w-[30%] py-5 bg-white shadow-lg mt-12 rounded-lg border border-gray-200">
        <ul>
          {
            
            searchSuggestion.map((text ,index)=>{
              return(
                <div className="flex items-center px-4 hover:bg-gray-100">
                <CiSearch size={"24px"}/>
                <li className=" px-2 py-1 cursor-pointer text-md font-medium">
                  {text}
                </li>
              </div>
              )
            })
          }
        </ul>
      </div>
      }
      </div>
     
      
      
     

      <div className="flex items-center w-[9%] justify-between">
        <LuVideo className=" cursor-pointer" size={"24px"}/>
        <IoIosNotificationsOutline className=" cursor-pointer" size={"24px"}/>
        <Avatar className=" cursor-pointer" src="./src/assets/pro.jpg" size={"40px"} round="100px" />
      </div>
    </div>
    </div>
  );
};

export default Navbar;
