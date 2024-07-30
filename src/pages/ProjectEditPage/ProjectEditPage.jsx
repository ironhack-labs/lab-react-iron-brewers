import { useParams } from "react-router-dom"
import EditProjectForm from "../../components/EditProjectForm/EditProjectForm"

const ProjectEditPage = () => {
  const { project_id } = useParams()
  return (
    <section className="ProjectEditPage">
      <h1>Edit project</h1>
      <div className="card p-3">
        <EditProjectForm projectId={project_id} />
      </div>
    </section>
  )
}
export default ProjectEditPage