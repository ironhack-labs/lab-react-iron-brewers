import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProjectsPage from './Pages/ProyectsPage'
import ProjectDetailsPage from './Pages/ProjectDetailsPage'
import ProjectEditPage from './Pages/ProyecteditPage'
import NewProjectPage from './Pages/NewProjectPage'
import Navbar from './Component/Navbar'

function App() {


  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:projectId" element={<ProjectEditPage />} />
        <Route path="/create" element={<NewProjectPage />} />

        <Route path="*" element={<h1>404 ERROR</h1>} />

      </Routes>
    </div>
  )
}

export default App
