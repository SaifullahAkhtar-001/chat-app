import React from "react";

function ChatContainer(props) {
  return (
    <div className="flex-auto rounded-[4rem] h-full p-8">
      <div className="flex flex-col gap-4">
        {props.children}
      </div>
    </div>
  );
}

export default ChatContainer;
