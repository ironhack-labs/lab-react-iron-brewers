import "./App.css"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Componets/Navbar/Navbar"
import HomePage from "./Pages/HomePage/HomePage"
import NewProjectPage from "./Pages/NewProjectPage/NewProjectPage"
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage"
import ProjectDetailsPage from "./Pages/ProjectDetails/ProjectDetailsPage"
import ProjectEditPage from "./Pages/ProjectEditPage/ProjectEditPage"

function App() {

  return (
    <div className="App">

      <Navbar />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="/create" element={<NewProjectPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:projectId" element={<ProjectEditPage />} />

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>

    </div>

  )

}
export default App