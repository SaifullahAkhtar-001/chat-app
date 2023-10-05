import React from "react";
import addButton from "../assets/img/Button.png"

function Massageinput() {
  return (
    <div className="h-16 rounded-full w-full bg-white flex ">
      <button>
        <img src={addButton} alt="" className="w-16" />
      </button>
      <input
        type="text"
        name=""
        id=""
        placeholder="Type here!"
        className="bg-transparent outline-none p-4"
      />
    </div>
  );
}

export default Massageinput;
