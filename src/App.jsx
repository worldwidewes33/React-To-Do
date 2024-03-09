import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <form action="">
        <input type="text" value={input} onChange={handleInput} />
        <input type="submit" value="Create To-Do" />
      </form>
      <ul></ul>
    </>
  );
}

export default App;
