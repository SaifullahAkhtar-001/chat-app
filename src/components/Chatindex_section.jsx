import React from "react";
import Contacts from "./contacts";
import addButton from "../assets/img/Button.png"

function Chatindex_section() {
  return (
    <div className="flex flex-col gap-8 xl:w-[35%] w-full h-full rounded-[4rem] border bg-white bg-opacity-50 p-8">
      <div className="flex h-16 rounded-[1.5rem] shadow-lg hover:shadow-2xl cursor-pointer hover:bg-[#e9f8ff]">
        <img src={addButton} alt="" className="w-16" />
        <dir className="text-xl font-light">Add Contact</dir>
      </div>
      <p className="font-semibold text-xl pl-2">Chat</p>
      <div className="flex flex-col gap-4 h-full rounded-[2.5rem] shadow-2xl p-4 bg-[#e9f8ff] bg-opacity-75 overflow-y-auto">
        <Contacts />
        <Contacts />
        <Contacts />
      </div>
    </div>
  );
}

export default Chatindex_section;
