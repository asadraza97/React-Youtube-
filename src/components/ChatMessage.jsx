import React from "react";
import Avatar from "react-avatar";

const ChatMessage= ({item})=>{
    return(
        <div className="flex items-center">
           <div>
           <Avatar className=" cursor-pointer" src="./src/assets/pro.jpg" size={"25px"} round="100px"/>
           </div>
         <div className=" flex items-center">
            <h1 className=" ml-2 font-bold text-sm"> {item.name} </h1>
            <p className=" ml-2 py-2 text-sm">  {item.message}</p>
        </div>
        </div>
    )
}

export default ChatMessage