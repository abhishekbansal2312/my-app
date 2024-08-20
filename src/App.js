import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Password from "./Password";
import Sixth from "./Sixth";
import Seventh from "./Seventh";
import Eight from "./Eight";
import Ninth from "./Ninth";
import Tenth from "./Tenth";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/about" element={<Second />} />
        <Route path="/password" element={<Password />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Fifth />} />
        <Route path="/sixth" element={<Sixth />} />
        <Route path="/seventh" element={<Seventh />} />
        <Route path="/eight" element={<Eight />} />
        <Route path="/ninth" element={<Ninth />} />
        <Route path="/tenth" element={<Tenth />} />
      </Routes>
    </Router>
  );
}

export default App;
