import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage/HomePage"
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage"
import ProjectDetails from "./pages/ProjectsDetails/ProjectsDetails"
import ProjectEditPage from "./pages/ProjectEditPage/ProjectEditPage"
import NewProjectPage from "./pages/NewProjectPage/NewProjectPage"




function App() {

  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/projects/edit/:projectId" element={<ProjectEditPage />} />
        <Route path="/projects/create/:projectId" element={<NewProjectPage />} />
      </Routes>

    </div>
  )
}

export default App