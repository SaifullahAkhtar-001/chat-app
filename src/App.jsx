import React from "react";
import "./index.css";
import {ChatIndexSection,ChatboxSection,MainContainer} from "./components"

function App() {
  return (
    <>
      <MainContainer>
        <ChatIndexSection />
        <ChatboxSection />
      </MainContainer>
    </>
  );
}

export default App;
