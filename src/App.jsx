import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  function getUniqueID() {
    return Math.floor(Math.random() * Date.now());
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  function createTodo(e) {
    e.preventDefault();

    const newTodo = {
      id: getUniqueID(),
      description: input,
      isComplete: false
    };

    setTodoItems([...todoItems, newTodo]);
    setInput('');
  }

  function completeTodo(id) {
    const newTodoItems = todoItems.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }

      return item;
    });

    setTodoItems(newTodoItems);
  }

  function deleteTodo(id) {
    const newTodoItems = todoItems.filter((item) => item.id !== id);

    setTodoItems(newTodoItems);
  }

  const todoList = todoItems.map((item) => {
    return (
      <li key={item.id} className={`${item.isComplete ? 'completed' : ''}`}>
        <input type="checkbox" onChange={() => completeTodo(item.id)} />
        <p>{item.description}</p>
        <button onClick={() => deleteTodo(item.id)}>X</button>
      </li>
    );
  });

  return (
    <>
      <form onSubmit={createTodo}>
        <input type="text" value={input} onChange={handleInput} />
        <input type="submit" value="Create To-Do" />
      </form>
      <ul>{todoList}</ul>
    </>
  );
}

export default App;
