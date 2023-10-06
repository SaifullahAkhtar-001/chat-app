import React from "react";

function ChatBox(props) {
  return (
    <div className="h-[500px] flex flex-col gap-4 p-[20px] overflow-y-auto">
      {props.children}
    </div>
  );
}

export default ChatBox; 