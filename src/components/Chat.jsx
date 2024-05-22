import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../chatSlice/ChatSlice";
import { RamdomCommentName,RamdomCommentText  } from "../random/RamdomComment";

const Chat= ()=>{
    const message = useSelector((store)=>store.chat.message);
    const dispatch = useDispatch();

    useEffect(()=>{
       const timer=  setInterval(()=>{
            dispatch(setMessage({ name: RamdomCommentName(), message: RamdomCommentText(16) }));
        }, 1000)
        return (()=>{
            clearInterval(timer)
        })
    },[])
 return(
        <div className="px-4 py-1 ">
            <div>
                {
                  message.map( (item, index)=>{
                    return(

                        <ChatMessage key={index} item={item}/>
                    )
                  })  
                }
            </div>
        </div>
    )
}

export default Chat