import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../constant/Youtube";
import Avatar from "react-avatar";
import { MdDownload } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdShareAlt, IoMdSend } from "react-icons/io";
import { BiDislike } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Chat from "./Chat";
import { useDispatch } from "react-redux";
import { setMessage } from "../chatSlice/ChatSlice";

const Watch = () => {
  const [input, setInput] =useState("")
  const [singleVideo, setSingleVideo] = useState(null);
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
  const dispatch = useDispatch();

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key= ${API_KEY}`
      );
      setSingleVideo(res?.data?.items[0]);
      console.log(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = () =>{
    dispatch(setMessage({
      name: "Asad Coder",
      message: input }));
      setInput("")
  };

  useEffect(() => {
    getSingleVideo();
  }, []);
  console.log(singleVideo);
  return (
    <div className="flex mt-2 ml-4 w-[80%]">
      <div className="flex w-[88%]">
        <div>
          <iframe
            width="800"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h1 className=" font-bold mt-2 text-lg ">
            {" "}
            {singleVideo?.snippet?.title}
          </h1>
          <div className="flex justify-between items-center">
            <div className="flex  items-center justify-between w-[35%]">
              <div className=" flex">
                <Avatar
                  className=" cursor-pointer"
                  src="./src/assets/pro.jpg"
                  size={"40px"}
                  round="100px"
                />
                <h1 className=" font-bold ml-2 mt-2">
                  {singleVideo?.snippet?.channelTitle}
                </h1>
              </div>
              <button className="px-4 py-1 font-medium bg-black text-white rounded-full">
                Subscribe
              </button>
            </div>
            <div className="flex items-center w-[40%] justify-between mt-2">
              <div className=" flex items-center cursor-pointer px-4 py-2 bg-gray-200 rounded-full">
                <AiOutlineLike size="20px" className="mr-5" />
                <BiDislike size="20px" />
              </div>
              <div className="flex items-center cursor-pointer px-4 py-2 bg-gray-200 rounded-full">
                <IoMdShareAlt size="20px" className="mr-2" />
                <span>Share</span>
              </div>
              <div className="flex items-center cursor-pointer px-4 py-2 bg-gray-200 rounded-full">
                <MdDownload className="mr-2" size="20px" />{" "}
                <span>Download</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] border border-gray-300 ml-1 rounded-lg h-fit p-4">
          <div className="flex justify-between items-center">
            <h1> Top Chat </h1>
            <BsThreeDotsVertical />
          </div>
          <div className=" overflow-y-auto h-[28rem] flex flex-col-reverse">
            <Chat/>
          </div>

          <div className=" flex items-center justify-between border-t p-2">
            <div className="flex items-center w-[90%] ">
              <div>
                <Avatar
                  className=" cursor-pointer"
                  src="./src/assets/pro.jpg"
                  size={"40px"}
                  round="100px"
                />
              </div>
              <input
                value={input}
                onChange={(e) =>setInput(e.target.value)}
                className="border-gray-300 outline-none border-b ml-2"
                type="text"
                placeholder="comment"
              />
              <div className=" bg-gray-200 cursor-pointer p-2 rounded-full">
                <IoMdSend onClick={sendMessage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Watch;
