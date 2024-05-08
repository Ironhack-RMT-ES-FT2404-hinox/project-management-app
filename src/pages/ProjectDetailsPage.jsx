import { Link, useParams } from "react-router-dom";
import AddTask from "../components/AddTask"; // for rendering Task Add Form
import TaskCard from "../components/TaskCard"; // for rendering Task List
import { useEffect, useState } from "react";
import axios from "axios";

function ProjectDetailsPage () {

  const params = useParams()
  console.log(params)

  //1. 
  const [ projectDetails, setProjectDetails ] = useState(null)

  //2.
  useEffect(() => {
    getData()
  }, [])

  const getData = () => {

    //3. 
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/projects/${params.projectId}?_embed=tasks`)
    // el query: ?_embed=tasks nos da todos los tasks de ese proyecto
    .then((respuesta) => {
      console.log(respuesta)
      setProjectDetails(respuesta.data)
    })
    .catch((error) => {
      console.log(error)
      
    })

  }
  
  //4. 
  if (projectDetails === null) {
    return <h3>... buscando</h3>
  }


  // 5. 
  return (
    <div className="ProjectDetailsPage">

      <div>
        <h1>{projectDetails.title}</h1>
        <p>{projectDetails.description}</p>
      </div>

      {/* ... list of all Tasks for this Project should be rendered here */}
      {projectDetails.tasks.map((eachTask) => {
        return <TaskCard key={eachTask.id} eachTask={eachTask}/>
      })}

      {/* ... form for adding a new Task should be rendered here    */}
      <AddTask getData={getData}/>

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
      
      <Link to={`/projects/edit/${projectDetails.id}`}>
        <button>Edit Project</button>
      </Link>      
      
    </div>
  );
}

export default ProjectDetailsPage;
