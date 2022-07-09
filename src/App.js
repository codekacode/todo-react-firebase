import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import Todo from './Todo';
import firebase from 'firebase/compat/app';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
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
          <Todo todo={todo} id={todo.id}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
