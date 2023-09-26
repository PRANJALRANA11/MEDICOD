import React from 'react'
import Navbar_Dash from '../Components/Dashboard/Navbar_Dash'
import { Route, Routes } from 'react-router-dom';
import Right_Dash from '../Components/Dashboard/Right_Dash';
import Main from '../Components/Dashboard/Main';
export default function Dashboard() {
  return (
    <div>
      <Routes>
      <Route path="/Dashboard" element={<>
        <Navbar_Dash/>
        {/* <Main/> */}
        <Right_Dash/>
      </>} />
        </Routes>
    </div>
  )
}
