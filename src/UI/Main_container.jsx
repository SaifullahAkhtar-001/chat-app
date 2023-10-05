import React from "react";
import bg from "../assets/img/OIG.jpg";

function Main_container(props) {
  return (
    <div
      className="h-[85vh] w-[75vw] rounded-[4.5rem] p-10 shadow-orange-300 shadow-2xl"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex max-xl:flex-col gap-8 glass1 w-full h-full p-4 rounded-[4rem]">
        {props.children}
      </div>
    </div>
  );
}

export default Main_container;
