
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function AddTask(props) {

  const params = useParams()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    // ...logic for creating a new Task should be here
    // ... the ID of the Project should be part of the Task data
    // para acceder al ID del proyecto lo podemos hacer por parametro dinamico o por props desde ProjectDetailsPage

    const newTask = {
      title,
      description,
      projectId: Number(params.projectId) // esto es algo particular de que los ID en este entorno deben ser numeros.
    }

    console.log(newTask)
    // podemos hacerlo con then/catch peeero para practicar hagamoslo con async/await

    try {

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/tasks`, newTask)
      console.log("tarea creada")

      // luego de crear la tarea, voy a hacer otra llamada al backend para buscar la informacion actualizada
      props.getData() // refrescar la información

    } catch(error) {
      console.log(error)
    }

  };
  
  return (
    <div className="AddTask">
      <h3>Add New Task</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;