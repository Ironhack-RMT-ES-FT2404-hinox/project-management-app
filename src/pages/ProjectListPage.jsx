import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard"; // used to render each Project
import { useEffect, useState } from "react";
import axios from "axios"

function ProjectListPage() {

  //1. Crear el estado que almacenará la data externa
  const [ projectsArr, setProjectsArr ] = useState([])

  //2. hacer el useEffect para llamar a la API cuando el componente se haya montado correctamente (componentDidMount)
  useEffect(() => {

    //3. usar fetch o axios para llamar a la API y procesar la Promesa.
    // fetch("https://project-management-api-4641927fee65.herokuapp.com/projects")
    // .then((respuesta) => {
    //   return respuesta.json()
    // })
    // .then((respuesta) => {
    //   console.log(respuesta)
    //   setProjectsArr(respuesta)
    // })

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
    .then((response) => {
      //! cuando usamos axios, la respuesta de la API siempre viene como .data
      console.log(response)
      setProjectsArr(response.data)
    })
    .catch((error) => {
      console.log(error)
      //! aqui deberiamos gestionar redireccion a paginas de error
    })

  }, [])
  
  return (
    <div className="ProjectListPage">

      <Link to="/projects/create">
        <button>Create Project</button>
      </Link>     

      {projectsArr.map((eachProject) => {
          {/* ... for each project, we should render one ProjectCard */}
          return <ProjectCard key={eachProject.id} eachProject={eachProject}/>
      })}

       
    </div>
  );
}

export default ProjectListPage;