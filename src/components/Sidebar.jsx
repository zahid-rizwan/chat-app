import React from "react";
import { MdChat, MdOutlineGroups } from "react-icons/md";
import { LuCircleDotDashed } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className=" w-[12%] py-4 h-screen bg-[#222C32] flex flex-col items-center justify-between">
      <div className="flex flex-col items-center w-full">
        <div className="cursor-pointer relative w-min p-2 flex items-center justify-center group rounded-full bg-gray-600">
            
          <MdChat className="" color="#B0BAC0" size={25} />
          <span className="absolute left-full top-1/2 transform -translate-y-1/2  ml-2 text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300">
            Chats
          </span>
        </div>
        <MdOutlineGroups className="mt-4" color="#B0BAC0" size={25} />
        <LuCircleDotDashed className="mt-4" color="#B0BAC0" size={25} />
      </div>
      <div>
        <IoSettingsOutline className="mb-4" color="#B0BAC0" size={25} />
        <CgProfile  color="#B0BAC0" size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
