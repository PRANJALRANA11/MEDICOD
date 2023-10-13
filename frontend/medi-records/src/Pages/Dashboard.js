
// This is the main dashboard page. It contains the navbar and the right side of the dashboard.
import React from 'react'
import Navbar_Dash from '../Components/Dashboard/Navbar_Dash'
import Right_Dash from '../Components/Dashboard/Right_Dash';
export default function Dashboard() {
  return (
    <div>
        <Navbar_Dash/>
        <Right_Dash/>
    </div>
  )
}
