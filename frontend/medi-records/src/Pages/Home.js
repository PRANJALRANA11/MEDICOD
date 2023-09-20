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
      <Navbar/>
      <Routes>
      <Route path="/" element={<>
       <Header/>
      <Section/>
      <Pricing/>
      <Contact/>
      </>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Signin" element={<Signin/>} />
      <Route path="/forgotpassword" element={<Forgotpassword/>} />
      <Route path="/resetpassword" element={<Resetpassword/>} />
      </Routes>
    </div>
  )
}
