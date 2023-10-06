import React from "react";
import Contacts from "./Contacts";
import addButton from "../assets/img/Button.png"
import MassageInput from "./Massageinput";

function ChatIndexSection() {
  return (
    <div className="flex flex-col gap-8 xl:w-[35%] w-full h-full rounded-[4rem] border bg-white bg-opacity-50 p-8">
      <MassageInput placeHolder="Search Here"/>
      <p className="font-semibold text-xl pl-2">Chat</p>
      <div className="flex flex-col gap-4 h-full rounded-[2.5rem] shadow-2xl p-4 bg-[#e9f8ff] bg-opacity-75 overflow-y-auto">
        <Contacts />
        <Contacts />
        <Contacts />
      </div>
    </div>
  );
}

export default ChatIndexSection;
