import { useParams } from 'react-router-dom'
import EditProjectCard from './../../components/EditProjectCard/EditProjectCard'

const ProjectEditPage = () => {

    const { projectId } = useParams()

    console.log("mi id es:", projectId)

    return (
        <div>
            rete
            <EditProjectCard projectsId={projectId} />
        </div>
    )
}
export default ProjectEditPage