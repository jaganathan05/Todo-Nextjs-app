import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

function TodoList(props) {
  return (
    <ul className={classes.list}>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          dueDate={todo.dueDate}
          priority={todo.priority}
          status={todo.completed}
          update={props.update}
        />
      ))}
    </ul>
  );
}

export default TodoList;
