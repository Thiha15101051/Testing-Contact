import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Sidebar from '../components/sidebar/Sidebar'
import Dashboard from '../components/dashboard/Dashboard'
import Recently_search from '../components/dashboard/recently_search/Recently_search'
import Home_page from '../pages/Home_page'

const Path = () => {
  const auth=false;
  return (
    <>
      <Navbar />
      <div className=" flex">
        <div
          className={`hidden lg:flex lg:w-1/5 ${auth ? "flex" : "lg:hidden"}`}
        >
          <Sidebar />
        </div>
        <div className={`w-full lg:w-4/5 py-5 ${auth? 'lg:w-4/5':'lg:w-full'}`}>
          <Routes>
            {/* <Route path="/" element={<Home_page />} /> */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recently_search" element={<Recently_search />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Path
