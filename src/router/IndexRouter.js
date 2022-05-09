import React from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandbox from '../views/sandbox/NewsSandbox'
export default function IndexRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* <Route path="/" element={<NewsSandbox />} /> */}
                <Route path="*" element={
                    localStorage.getItem("token") ?
                        <NewsSandbox></NewsSandbox> :
                        <Navigate to="/login" />
                } />
            </Routes>
        </HashRouter>
    )
}
