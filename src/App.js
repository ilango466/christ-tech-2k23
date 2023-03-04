import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PaperPresentation from "./Events/PaperPresentation";
import ClickOnSpot from "./Events/ClickOnSpot";
import Quiz from "./Events/Quiz";
import CodeDebugging from "./Events/CodeDebugging";
import Memathon from "./Events/Memathon";
import TestYourMemory from "./Events/TestYourMemory";
import Event from "./event";

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
        <Route exact path="/paperpresentation" element={<CodeDebugging />} />
        <Route exact path="/paperpresentation" element={<Quiz />} />
        <Route exact path="/paperpresentation" element={<Memathon />} />
        <Route exact path="/paperpresentation" element={<TestYourMemory />} />
        <Route exact path="/paperpresentation" element={<ClickOnSpot />} />
      </Routes>
    </>
  );
}

export default App;
