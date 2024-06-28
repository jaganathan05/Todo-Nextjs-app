import classes from './TodoItem.module.css';

function TodoItem(props) {
const handlecheckboxclick = async()=>{
    const response = await fetch('/api/Update-Todo', {
      method: 'PATCH',
      body: JSON.stringify({ id: props.id, completed: true }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      props.update()
    }
}

const DeleteHandler = async()=>{
  const response = await fetch('/api/Delete-todo', {
    method: 'DELETE',
    body: JSON.stringify({ id: props.id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    props.update();
  }
}

  return (
    <li className={classes.item}>
      { !props.status && <input type="checkbox" className={classes.checkbox} onChange={handlecheckboxclick}/>}
      <div className={classes.content}>
        <div className={classes.header}>
          <span className={`${classes.priority} ${classes[props.priority.toLowerCase()]}`}></span>
          <h3>{props.title}</h3>
          <p className={classes.dueDate}>{props.dueDate}</p>
        </div>
        <p className={classes.description}>{props.description}</p>
        {props.status && <p>COMPLETED</p>}
      </div>
      <button onClick={DeleteHandler}>Delete</button>
    </li>
  );
}

export default TodoItem;
