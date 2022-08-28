import React from 'react'
import Homepage from './Pages/Homepage/Homepage';
import { Routes, Route, Link } from "react-router-dom";
import ViewProduct from './Pages/ViewProduct/ViewProduct';
import Loginpage from './Pages/Loginpage/Loginpage';
import Signuppage from './Pages/Signuppage/Signuppage';

function App() {
  return (
   
    <Routes>
    <Route path="/"  element={ <Homepage/>} />
    <Route path="/product/:id" element={<ViewProduct />} />
    <Route path="/login" element={<Loginpage />} />
    <Route path="/signup" element={<Signuppage />} />
  </Routes>
    )

}

export default App