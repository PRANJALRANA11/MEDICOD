import React from 'react'
import Navbar_Dash from '../Components/Dashboard/Navbar_Dash'
import { Route, Routes } from 'react-router-dom';
import Right_Dash from '../Components/Dashboard/Right_Dash';
import Main from '../Components/Dashboard/Main';
import Right_dash_files from '../Components/Dashboard/Right-dash-files';
export default function Dashboard() {
  return (
    <div>
      <Routes>
      <Route path="/Dashboard" element={<>
        <Navbar_Dash/>
        {/* <Main/> */}
        <Right_dash_files/>
        <Right_Dash/>
      </>} />
        </Routes>
    </div>
  )
}
