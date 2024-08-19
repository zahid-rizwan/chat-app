import React, { useState } from "react";
import { RiChatNewFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import boy from "../assets/boy.png";
import ChatScreen from "./ChatScreen";

const Chats = () => {
  const [individual, setIndividual] = useState([
    {
      name: "Mannu",
      message: "Chal chaye peene",
    },
    {
      name: "Hibban",
      message: "Chal Mandi khane",
    },
    {
      name: "Meraj",
      message: "Chal Biryani  Khane",
    },
    {
      name: "Ashad",
      message: "Chal khana khane",
    },
    {
      name: "Ashad",
      message: "Chal khana khane",
    },
    {
      name: "Ashad",
      message: "Chal khana khane",
    },
    {
      name: "Ashad",
      message: "Chal khana khane",
    },
    {
      name: "Ashad",
      message: "Chal khana khane",
    },
    {
      name: "Ashad",
      message: "Chal khana khane",
    },
    {
      name: "Ashad",
      message: "Chal khana khane",
    },
    {
      name: "Ashad",
      message: "Chal khana khane",
    },
    {
      name: "Ashad",
      message: "Chal khana khane",
    },
    {
      name: "Ashad",
      message: "Chal khana khane",
    },
    {
      name: "Ashad",
      message: "Chal khana khane",
    },
    {
      name: "Ashad",
      message: "Chal khana khane",
    },
    {
      name: "Ashad",
      message: "Chal khana khane",
    },
  ]);
  const [currentChat,setCurrentChat] = useState(false)
  const [userName, setUserName] = useState(""); // Corrected useState
  const handleCurrentChat = (item) =>{
    setCurrentChat(true)
    setUserName(item.name)
  }

  return (
    <div className="flex w-full" >
    <div className=" w-full sm:w-4/12 flex flex-col h-screen bg-[#131B20]  overflow-y-hidden overflow-x-hidden relative">
      <div className="bg-[#131B20] flex flex-col w-full absolute px-2" >
        <div className="flex mt-5 justify-between">
          <h1 className="mx-5 text-white text-2xl font-bold">Chats</h1>
          <div className="flex">
            <RiChatNewFill className="mt-1 mx-3 " color="#B0BAC0" size={26} />
            <BsThreeDotsVertical className="mt-1" color="#B0BAC0" size={26} />
          </div>
        </div>

        <form className="max-w-md mt-8 mx-2">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full h-[40px] p-4 pl-10 text-sm text-gray-900 focus:outline-none rounded-lg bg-[#222C32] dark:bg-[#222C32] dark:placeholder-gray-400 placeholder:font-semibold dark:text-white"
              placeholder="Search"
              required
            />
          </div>
        </form>
        <div className="text-gray-400 flex  mt-3 ">
          <span className=" cursor-pointer ms-2 mx-1 p-1 px-2 rounded-xl hover:text-green-600 bg-[#222C32]">
            All
          </span>
          <span className="cursor-pointer mx-1 p-1 px-2 rounded-xl hover:text-green-600 bg-[#222C32]">
            Unread
          </span>
          <span className="cursor-pointer mx-1 p-1 px-2 rounded-xl hover:text-green-600 bg-[#222C32]">
            Groups
          </span>
        </div>
      </div>

      <div className="mt-[180px] h-[90vh] overflow-y-scroll px-2 pb-16">
        {individual.map((item, index) => (
          <div onClick={()=>handleCurrentChat(item)} >
            <div className="flex   text-white m-3">
              <img src={boy} alt="" className="w-12 rounded-full bg-white" />
              <div className="ps-5 w-full ">
                <h1 className="text-xl">{item.name}</h1>
                <h3 className="text-xs text-gray-400">{item.message} </h3>
              </div>
            </div>
            <div className=" ms-20 border-zinc-700 mt-2 border-b"></div>
          </div>
        ))}
      </div>
    </div>
    {currentChat && <ChatScreen userName={userName}/>}
    </div>
  );
};

export default Chats;
