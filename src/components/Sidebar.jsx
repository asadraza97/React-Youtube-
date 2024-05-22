import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";
// import store from "../store/Store";


const sidebarItem = [
  {
    icon: <GoHomeFill size="24px" />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <GoHomeFill size="24px" />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <GoHomeFill size="24px" />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <GoHomeFill size="24px" />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <GoHomeFill size="24px" />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <GoHomeFill size="24px" />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
  {
    icon: <MdSubscriptions size="24px" />,
    title: "Subscriptions",
  },
];
const Sidebar = () => {
  // const toggle = false;
  const toggle = useSelector((store)=>store.app.open);     
// console.log(open);

  return (
    <div  className={`ml-1 relative left-0 ${toggle?" w-[15%]" : "w-[7%] "}  overflow-y-scroll overflow-x-hidden  p-5 h-[calc(100vh-4.625rem)]`}>
      {sidebarItem.map((item, index) => {
        return (
          <div className="flex  my-3 ml-1" key={index}>
           {item.icon}
            <h2 className={`ml-5 ${toggle ? "" : "hidden"} ` }> {item.title} </h2>
          </div>
        );
      })}

    </div>
  );
};

export default Sidebar;
