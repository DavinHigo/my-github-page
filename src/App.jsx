import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import TeamBuilder from '../pages/TeamBuilder'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TeamBuilder" element={<TeamBuilder />} />
    </Routes>
  )
}
