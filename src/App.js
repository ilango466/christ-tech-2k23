import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PaperPresentation from "./Events/PaperPresentation";
import ClickOnSpot from "./Events/ClickOnSpot";
import Quiz from "./Events/Quiz";
import CodeDebugging from "./Events/CodeDebugging";
import Memathon from "./Events/Memathon";
import TestYourMemory from "./Events/TestYourMemory";
import Event from "./event";
import Details from "./details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Event />} />
        <Route
          exact
          path="/paperpresentation"
          element={<PaperPresentation />}
        />
        <Route exact path="/codedebugging" element={<CodeDebugging />} />
        <Route exact path="/quiz" element={<Quiz />} />
        <Route exact path="/meme" element={<Memathon />} />
        <Route exact path="/testyourmemory" element={<TestYourMemory />} />
        <Route exact path="/clickonspot" element={<ClickOnSpot />} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </>
  );
}

export default App;
