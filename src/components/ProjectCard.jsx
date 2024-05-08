import { Link } from "react-router-dom";

function ProjectCard (props) {

  console.log(props)
  
  return (
    <div className="ProjectCard card">
      <Link to={`/projects/${props.eachProject.id}`}>
        <h3>{props.eachProject.title}</h3>
      </Link>
      <p>{props.eachProject.description}</p>
    </div>
  );
}

export default ProjectCard;