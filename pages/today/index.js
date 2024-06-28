import { useState } from 'react';
import { MongoClient } from 'mongodb';
import TodoList from '../../components/Todo/TodoList';

function HomePage(props) {
  const [todos, setTodos] = useState(props.todos);

  const updateHandler = async () => {
    const response = await fetch('/api/Get-todo');
    const data = await response.json();
    setTodos(data.todos);
  };

  return <TodoList todos={todos} update={updateHandler} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://jaganathanv888:Jack%40888@cluster0.7zpv1uv.mongodb.net/Todos?retryWrites=true&w=majority&appName=Cluster0'
  );
  const db = client.db();

  const todoCollection = db.collection('Todos');

  const todos = await todoCollection.find({dueDate:'today'}).toArray();

  client.close();

  return {
    props: {
      todos: todos.map((todo) => ({
        title: todo.title,
        description: todo.description,
        dueDate: todo.dueDate,
        priority: todo.priority,
        id: todo._id.toString(),
        completed: todo.completed,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
