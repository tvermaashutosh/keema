import { Route, Routes } from "react-router-dom"

import Navbar from "./comp/Navbar"

import Home from "./page/Home"
import Dashboard from "./page/Dashboard"
import AddPatient from "./page/AddPatient"
import Login from "./page/Login"

export default function () {
  return <>
    <Navbar />
    <div className="container mt-5">
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add_patient" element={<AddPatient />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  </>
}