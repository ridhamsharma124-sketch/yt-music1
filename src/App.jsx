import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/App";
import Home from './Pages/Home';
import NotFound from './Pages/auth/404';
import Login from './Pages/auth/Login'
import Signin from './Pages/auth/Signin'
import Forgot from './Pages/auth/Forgot'
import Authlayout from './layouts/Auth';
import Profile from './Pages/auth/Profile';
import Create from './Pages/auth/Create';
import Existing from './Pages/auth/Existing';
   import Darkmode from"../src/context/Darkmode";
// import { UserProvider } from './context/UserContext';
// import { DarkModeProvider } from "./context/DarkModeContext";

function App() {

  return (
    <>
    

   {/* <UserProvider> */}
      {/* <DarkModeProvider> */}
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<AppLayout />}>
      <Route path='/Home' element={<Home/>}/>
    </Route>

      <Route path='/' element={<Authlayout/>}>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Forgot' element={<Forgot/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Create' element={<Create/>}/>
      <Route path='/Existing' element={<Existing/>}/>
      <Route path='/Darkmode' element={<Darkmode/>}/>
      </Route>
   
    
    </Routes>
   
  </BrowserRouter>
  {/* </DarkModeProvider> */}
      {/* </UserProvider> */}

  
  
    </>
  )
}

export default App
