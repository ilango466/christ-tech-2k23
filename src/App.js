import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Data from "./data";
import Event from "./event";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Data />}></Route>
        <Route path="/event" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
