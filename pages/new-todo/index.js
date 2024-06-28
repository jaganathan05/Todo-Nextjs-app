// our-domain.com/new-todo
import { useRouter } from 'next/router';

import NewTodoForm from '../../Components/Todo/New-Todo';

function NewTodoPage() {
  const router = useRouter();

  async function addTodoHandler(enteredTodoData) {
    const response = await fetch('/api/New-Todo', {
      method: 'POST',
      body: JSON.stringify(enteredTodoData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return <NewTodoForm onAddTodo={addTodoHandler} />
}

export default NewTodoPage;
