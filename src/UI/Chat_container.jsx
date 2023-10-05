import React from "react";

function Chat_container(props) {
  return (
    <div className="flex-auto rounded-[4rem] h-full p-8">
      <div className="flex flex-col gap-4">
        {props.childrens}
      </div>
    </div>
  );
}

export default Chat_container;
