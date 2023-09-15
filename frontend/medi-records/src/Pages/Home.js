import React from 'react'
import Navbar from '../Components/Home_components/Navbar'
import Header from '../Components/Home_components/Header'
import Section from '../Components/Home_components/Section'
import Pricing from '../Components/Home_components/Pricing'
import Contact from '../Components/Home_components/Contact'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Section/>
      <Pricing/>
      <Contact/>
    </div>
  )
}
