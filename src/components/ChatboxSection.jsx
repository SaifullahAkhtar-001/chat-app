import React from "react";
import ChatContainer from "../ui/ChatContainer";
import ChatHeader from "./ChatHeader";
import SenderBox from "./senderBox";
import ReciverBox from "./ReciverBox";
import MassageInput from "./Massageinput";
import ChatBox from "../ui/ChatBox";

function ChatboxSection() {
  return (
    <ChatContainer>
      <ChatHeader />
      <ChatBox>
        <SenderBox />
        <ReciverBox />
        <SenderBox />
        <ReciverBox />
        <SenderBox />
        <ReciverBox />
      </ChatBox>
      <MassageInput placeHolder="Type Here..."/>
    </ChatContainer>
  );
}

export default ChatboxSection;
