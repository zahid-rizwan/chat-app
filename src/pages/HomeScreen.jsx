import React from "react";
import Sidebar from "../components/Sidebar";

import ChatScreen from "../components/ChatScreen";
import Chats from "../components/Chats";

const HomeScreen = () => {
  return (
    // <div className="w-full sm:flex">
      <div className="w-full  flex flex-col-reverse sm:flex-row">
        <Sidebar />
        <Chats />
      {/* </div> */}

      {/* <ChatScreen /> */}
    </div>
  );
};

export default HomeScreen;
