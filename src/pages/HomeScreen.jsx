import React from "react";
import Sidebar from "../components/Sidebar";

import ChatScreen from "../components/ChatScreen";
import Chats from "../components/Chats";

const HomeScreen = () => {
  return (
    <div className="w-full flex">
      <div className="w-4/12 flex">
        <Sidebar />
        <Chats />
      </div>

      <ChatScreen />
    </div>
  );
};

export default HomeScreen;
