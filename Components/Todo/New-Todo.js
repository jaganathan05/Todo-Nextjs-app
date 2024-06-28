import { useRef } from 'react';
import classes from './New-Todo.module.css';

function NewTodoForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const dueDateInputRef = useRef();
  const priorityInputRef = useRef();
  const today = new Date().toISOString().split('T')[0];

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredDueDate = dueDateInputRef.current.value;
    const enteredPriority = priorityInputRef.current.value;

    const todoData = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      priority: enteredPriority,
      completed: false
    };

    props.onAddTodo(todoData);
  }

  return (
   
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Task Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='dueDate'>Due Date</label>
          <select required id='dueDate' ref={dueDateInputRef}>
        <option value={'today'}>Today</option>
        <option value={'tomorrow'}>Tomorrow</option>
      </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='priority'>Priority</label>
          <select id='priority' required ref={priorityInputRef}>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
        </div>
        <div className={classes.actions}>
          <button>Add Task</button>
        </div>
      </form>

  );
}

export default NewTodoForm;
