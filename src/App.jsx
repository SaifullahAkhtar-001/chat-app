import React from "react";
import "./index.css";
import Main_container from "./UI/Main_container";
import Chatindex_section from "./components/Chatindex_section";
import Cahtbox_container from "./components/Cahtbox_container";

function App() {
  return (
    <>
      <Main_container>
        <Chatindex_section />
        <Cahtbox_container />
      </Main_container>
    </>
  );
}

export default App;
