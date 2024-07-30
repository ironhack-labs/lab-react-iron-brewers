import axios from "axios"
import { useEffect, useState } from "react"
import IsLoading from "../../components/IsLoading/IsLoading"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import { TropicalStorm } from "react-bootstrap-icons"
const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const ProjectsPage = () => {
  const [projectsData, setProjectsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchProjectsData()
  }, [])

  const fetchProjectsData = () => {
    axios
      .get(`${API_URL}/projects`)
      .then(response => {
        setProjectsData(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }

  return (
    <section className="ProjectsPage text-center">
      <div className="text-center">
        <TropicalStorm size={64} />
      </div>
      <h1>Projects</h1>
      <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
        <div className="list-group w-100">
          {
            isLoading
              ? <IsLoading />
              : projectsData.map(project => {
                return <ProjectCard key={project.id} {...project} />
              })
          }
        </div>
      </div>
    </section>
  )
}
export default ProjectsPage