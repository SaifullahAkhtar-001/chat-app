import React, { useImperativeHandle } from "react";
import "./index.css";
import profileAvatar from "./assets/img/avatar.png";
import addButton from "./assets/img/Button.png";
import bg from "./assets/img/OIG.jpg";
import Contacts from "./components/contacts";
import ReciverBox from "./components/ReciverBox";
import SenderBox from "./components/senderBox";

function App() {
  return (
    <>
      <div
        className="h-[85vh] w-[75vw] rounded-[4.5rem] p-10 shadow-orange-300 shadow-2xl"
        style={{
          backgroundImage:
          `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex max-xl:flex-col gap-8 glass1 w-full h-full p-4 rounded-[4rem]">
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
          <div className="flex-auto rounded-[4rem] h-full p-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-end gap-6 ">
                <img
                  src={profileAvatar}
                  alt=""
                  className="mb-[-6px] w-16 h-16 rounded-full"
                />
                <div className="text-2xl opactiy-75">Saifullah Akhtar</div>
              </div>
              <div className="h-[500px] flex flex-col gap-4 p-[20px] overflow-y-auto">
                <SenderBox />
                <ReciverBox />
                <SenderBox />
                <ReciverBox />
                <SenderBox />
                <ReciverBox />
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
