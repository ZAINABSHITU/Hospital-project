import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Appointment from './pages/Appointment'
import Doctors from './pages/Doctors'
import Department from './pages/Department'
import Custom from './pages/Customer'
import Blog from './pages/Blog'




function App() {
  

  return (
    <>
      <div> 
    {/* <Header /> */}
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path='/About'element={<About/>}/>
        <Route path='/Service'element={<Service/>}/>
        <Route path='/Appointment'element={<Appointment/>}/>
        <Route path='/Doctors'element={<Doctors/>}/>
        <Route path='/Department'element={<Department/>}/>
        <Route path='/Custom'element={<Custom/>}/>
        <Route path='/Blog'element={<Blog/>}/>
      

      </Routes>
      </BrowserRouter>
     
      </div>
    </>
  )
}

export default App
