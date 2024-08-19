import React from "react";
import { MdChat, MdOutlineGroups } from "react-icons/md";
import { LuCircleDotDashed } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="fixed sm:static w-full z-10 sm:z-1 sm:w-[5%] py-2 sm:py-4 sm:h-screen bg-[#222C32] flex sm:flex-col items-center justify-center sm:justify-between">
      <div className="flex sm:flex-col items-center sm:w-full">
        <div className="cursor-pointer relative w-min mx-2 p-2 flex items-center justify-center group rounded-full bg-gray-600">
            
          <MdChat className="" color="#B0BAC0" size={25} />
          <span className="absolute left-full top-1/2 transform -translate-y-1/2  ml-2 text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300">
            Chats
          </span>
        </div>
        <MdOutlineGroups className=" mx-3 sm:mx-0 sm:mt-4" color="#B0BAC0" size={25} />
        <LuCircleDotDashed className=" mx-3 sm:mx-0 sm:mt-4" color="#B0BAC0" size={25} />
      </div>
      <div className="flex sm:flex-col">
        <IoSettingsOutline className=" mx-3 sm:mx-0 sm:mb-4" color="#B0BAC0" size={25} />
        <CgProfile className="mx-3 sm:mx-0"  color="#B0BAC0" size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
