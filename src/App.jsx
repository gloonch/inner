import './App.css'
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Register from "./components/RegisterPage.jsx";


function App() {


  return (
      <Router>
          <div className="flex flex-col min-w-screen min-h-screen ">
          {/*<Header/>*/}
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/register" element={<Register />} />
              </Routes>
          </div>
      </Router>
  )
}

export default App
