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

  function createToDo(e) {
    e.preventDefault();

    const newTodo = {
      id: getUniqueID(),
      description: input,
      isComplete: false
    };

    setTodoItems([...todoItems, newTodo]);
    setInput('');
  }

  const todoList = todoItems.map((item) => {
    return (
      <li key={item.id}>
        <input type="checkbox" value={item.isComplete} />
        {item.description}
        <button>X</button>
      </li>
    );
  });

  return (
    <>
      <form onSubmit={createToDo}>
        <input type="text" value={input} onChange={handleInput} />
        <input type="submit" value="Create To-Do" />
      </form>
      <ul>{todoList}</ul>
    </>
  );
}

export default App;
