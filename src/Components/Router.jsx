import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../Pages/LoginPage'
import { Navbar } from './Navbar'
import { RegisterUser } from '../Pages/RegisterUser'
export const Router = () => {
    return (<Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterUser />} />
    </Routes>)

}
