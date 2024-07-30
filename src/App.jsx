
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage/ProjectDetailsPage'
import ProjectEditPage from './pages/ProjectEditPage/ProjectEditPage'
import AddNewProjects from './pages/AddNewProjects/AddNewProjects'

function App() {


  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/projects/:id' element={<ProjectDetailsPage />} />
        <Route path='/projects/edit/:id' element={<ProjectEditPage />} />
        <Route path="/create" element={<AddNewProjects />} />

        <Route path='*' element={<h1>404 NOT FOUND</h1>} />

      </Routes>
    </div>
  )
}

export default App