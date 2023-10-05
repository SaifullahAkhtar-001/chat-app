import React from "react";
import profileAvatar from "../assets/img/avatar.png"

function Chat_header() {
  return (
    <div className="flex items-end gap-6 ">
      <img
        src={profileAvatar}
        alt=""
        className="mb-[-6px] w-16 h-16 rounded-full"
      />
      <div className="text-2xl opactiy-75">Saifullah Akhtar</div>
    </div>
  );
}

export default Chat_header;
