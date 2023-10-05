import React from "react";
import profileAvatar from "../assets/img/avatar.png"

function ReciverBox() {
  return (
    <div className="flex items-end gap-2 justify-end">
      <p className="h-fit p-6 bg-blue-200 w-[20rem] rounded-l-xl rounded-tr-xl shadow-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.reprehenderit
      </p>
      <img
        src={profileAvatar}
        alt=""
        className="w-10 h-10 rounded-full bg-white"
      />
    </div>
  );
}

export default ReciverBox;
