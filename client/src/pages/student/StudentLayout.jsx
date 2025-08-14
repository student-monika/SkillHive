import React from 'react'
import Navbar from '../../components/students/Navbar'
import { Outlet } from 'react-router-dom'

const StudentLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default StudentLayout