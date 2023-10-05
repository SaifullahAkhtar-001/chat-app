import React from "react";
import profileAvatar from "../assets/img/avatar.png"

function SenderBox() {
  return (
    <div className="flex items-end gap-2 justify-start">
      <img
        src={profileAvatar}
        alt=""
        className="w-10 h-10 rounded-full"
      />
      <p className="h-fit p-6 bg-white w-[20rem] rounded-r-xl rounded-tl-xl shadow-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.reprehenderit
      </p>
    </div>
  );
}

export default SenderBox;
