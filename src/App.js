import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useState } from 'react';
import Todo from './Todo';

function App() {

  const [todos, setTodos] = useState(['task1', 'task2']);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      input
    ])
    setInput('');   
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
        </FormControl>
      </form>
      <Button disabled={!input} type="submit" className="button__addtodo" onClick={addTodo} variant="contained">Add Todo</Button>
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
