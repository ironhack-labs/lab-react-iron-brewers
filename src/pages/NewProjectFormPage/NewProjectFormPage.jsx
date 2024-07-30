import NewProjectForm from "../../components/NewProjectForm/NewProjectForm"

const NewProjectFormPage = () => {

  return (
    <section className="NewProjectFormPage">
      <h1>Create new project</h1>
      <div className="card p-3">
        <NewProjectForm />
      </div>
    </section>
  )
}

export default NewProjectFormPage