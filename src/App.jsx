import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProjectDetailsPage from './pages/ProjectDetailsPage/ProjectDetailsPage'
import NewProjectPage from './pages/NewProjectPage/NewProjectPage'
import EditProjectPage from './pages/EditProjectPage/EditProjectPage'


function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path='/create' element={<NewProjectPage />} />
        <Route path='/projects/edit/:projectId' element={<EditProjectPage />} />
      </Routes>
    </div>
  )
}

export default App
