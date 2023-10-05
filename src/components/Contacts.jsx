import React from "react";
import profileAvatar from "../assets/img/avatar.png";


function Contacts() {
  return (
    <div className="flex gap-4 items-center transition-shadow p-4 h-20 w-full bg-white rounded-[4rem] hover:shadow-lg">
      <img
        src={profileAvatar}
        alt=""
        className="w-12 h-12 rounded-full bg-white"
      />
      <div>
        <div className="font-semibold">Saifullah</div>
        <div className="opacity-70">Hi, I am Saif</div>
      </div>
    </div>
  );
}

export default Contacts;
