import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'
import NewProjectPage from './pages/NewProjectPage/NewProjectPage'
import ProjectDetails from './components/ProjectDetails/ProjectDetails'
import ProjectEditPage from './pages/ProjectEditPage/ProjectEditPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path='/projects' element={<ProjectsPage />}></Route>
        <Route path='/projects/:projectId' element={<ProjectDetails />}></Route>
        <Route path='/projects/edit/:projectId' element={<ProjectEditPage />}></Route>
        <Route path='/create' element={<NewProjectPage />}></Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  )
}

export default App
