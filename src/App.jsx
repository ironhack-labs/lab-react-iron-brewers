import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import NavBar from './components/NavBar/NavBar'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import NewProjectFormPage from './pages/NewProjectFormPage/NewProjectFormPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage/ProjectDetailsPage'
import ProjectEditPage from './pages/ProjectEditPage/ProjectEditPage'

function App() {

  return (
    <main className="App">
      <div className='navbar navbar-expand navbar-dark bg-dark'>
        <div className="container-fluid">
          <div id="navbar" className='collapse navbar-collapse'>
            <NavBar />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:project_id" element={<ProjectDetailsPage />} />
              <Route path="/projects/edit/:project_id" element={<ProjectEditPage />} />
              <Route path="/new-project" element={<NewProjectFormPage />} />
              <Route path="*" element={<h1 className='text-center py-5'>404 error - Not found! 😶‍🌫️</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
