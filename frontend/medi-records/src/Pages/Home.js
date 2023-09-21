import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Home_components/Navbar'
import Header from '../Components/Home_components/Header'
import Section from '../Components/Home_components/Section'
import Pricing from '../Components/Home_components/Pricing'
import Contact from '../Components/Home_components/Contact'
import Signup from '../Components/Home_components/Signup'
import Signin from '../Components/Home_components/Signin'
import Forgotpassword from '../Components/Home_components/forgotpassword'
import Resetpassword from '../Components/Home_components/Resetpassword'



export default function Home() {
  return (
    <div>
      
      <Routes>
      <Route path="/" element={<>
      <Navbar/>
       <Header/>
      <Section/>
      <Pricing/>
      <Contact/>
      </>} />
      <Route path="/Signup" element={<> <Navbar/><Signup/></>} />
      <Route path="/Signin" element={<> <Navbar/><Signin/></>} />
      <Route path="/forgotpassword" element={<Forgotpassword/>} />
      <Route path="/resetpassword" element={<Resetpassword/>} />
      </Routes>
    </div>
  )
}
