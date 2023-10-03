import React from "react";
import "./index.css";
import addButton from "./assets/img/Button.png";
import profileAvatar from "./assets/img/avatar.png";

function App() {
  return (
    <>
      <div className="h-[85vh] w-[75vw] rounded-[4.5rem] bg-blue-600 p-10 shadow-blue-600 shadow-2xl">
        <div className="flex max-xl:flex-col gap-8 bg-[#e9f8ff] w-full h-full p-4 rounded-[4rem]">
          <div className="flex flex-col gap-8 xl:w-[35%] w-full h-full rounded-[4rem] border bg-white p-8">
            <div className="flex h-16 rounded-[1.5rem] shadow-2xl cursor-pointer hover:bg-[#e9f8ff]">
              <img src={addButton} alt="" className="w-16" />
              <dir className="text-xl font-light">Add Contact</dir>
            </div>
            <p className="font-semibold text-xl pl-2">Chat</p>
            <div className="flex flex-col gap-4 h-full rounded-[2.5rem] shadow-2xl p-4 bg-[#e9f8ff] overflow-y-auto">
              <div className="flex gap-4 items-center transition-shadow p-4 h-20 w-full bg-white rounded-[4rem] hover:shadow-lg">
                <img
                  src={profileAvatar}
                  alt=""
                  className="w-12 h-12 rounded-full bg-white"
                />
                <div>
                  <div className="font-semibold">Saifullah</div>
                  <div className="opacity-70">Hi, I am Saif</div>
                </div>
              </div>
              <div className="flex gap-4 items-center transition-shadow p-4 h-20 w-full bg-white rounded-[4rem] hover:shadow-lg">
                <img
                  src={profileAvatar}
                  alt=""
                  className="w-12 h-12 rounded-full bg-white"
                />
                <div>
                  <div className="font-semibold">Saifullah</div>
                  <div className="opacity-70">Hi, I am Saif</div>
                </div>
              </div>
              <div className="flex gap-4 items-center transition-shadow p-4 h-20 w-full bg-white rounded-[4rem] hover:shadow-lg">
                <img
                  src={profileAvatar}
                  alt=""
                  className="w-12 h-12 rounded-full bg-white"
                />
                <div>
                  <div className="font-semibold">Saifullah</div>
                  <div className="opacity-70">Hi, I am Saif</div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="flex-auto rounded-[4rem] h-full p-8">
            <div className="flex items-end gap-4 ">
              <img src={profileAvatar} alt="" className="w-12 h-12 rounded-full"/>
              <div>Saifullah Akhtar</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
