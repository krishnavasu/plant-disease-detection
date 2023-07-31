import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Prediction from "./pages/Prediction"
import History from "./pages/History"
import About from "./pages/About"
import Result from "./pages/Result"
// import cures from "./pages/Cures"  
import Cures from "./pages/Cures"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/predict" element={<Prediction />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="/result" element={<Result />} />
        <Route path="/cures" element={<Cures />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
