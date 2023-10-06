import React from "react";
import addButton from "../assets/img/Button.png"

function MassageInput(props) {
  return (
    <div className="h-16 rounded-full w-full bg-white flex ">
      <button>
        <img src={addButton} alt="" className="w-16" />
      </button>
      <input
        type="text"
        name=""
        id=""
        placeholder={props.placeHolder}
        className="bg-transparent outline-none p-4 w-full"
      />
    </div>
  );
}

export default MassageInput;
