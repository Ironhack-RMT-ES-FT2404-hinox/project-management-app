
function TaskCard(props) {

    const { title, description } = props.eachTask

    return (
      <div className="TaskCard card">
        <h3>{title}</h3>
        <h4>Description:</h4>
        <p>{description}</p>
      </div>
    );
  }
  
  export default TaskCard;