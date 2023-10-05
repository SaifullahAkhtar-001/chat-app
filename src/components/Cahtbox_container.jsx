import React from "react";
import Chat_container from "../UI/Chat_container";
import Chat_header from "./Chat_header";
import SenderBox from "./senderBox";
import ReciverBox from "./ReciverBox";
import Massageinput from "./Massageinput";

function Cahtbox_container() {
  return (
    <Chat_container>
      <Chat_header />
      <div className="h-[500px] flex flex-col gap-4 p-[20px] overflow-y-auto">
        <SenderBox />
        <ReciverBox />
        <SenderBox />
        <ReciverBox />
        <SenderBox />
        <ReciverBox />
      </div>
      <Massageinput />
    </Chat_container>
  );
}

export default Cahtbox_container;
