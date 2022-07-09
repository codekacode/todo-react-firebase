import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Modal, Button } from '@material-ui/core';
import "./Todo.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { db } from './firebase';
import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#fff',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3)
  }
}))

function Todo(props) {
  const [open, setOpen] = useState();
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true)
  }

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      todo: input,
    }, {merge: true})
    setOpen(false)
  }

  return (
    <>
    <Modal
      open={open}
      onClose={e => setOpen(false)}
    >
      <div className={useStyles.paper}>
        <h1>Im a modal</h1>
        <input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)} />
        <Button onClick={updateTodo}>Update Todo</Button>
      </div>
      
    </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <TaskAltOutlinedIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Todo" secondary={props.todo.todo}/>
        </ListItem>
        <button onClick={e => setOpen(true)}>Edit</button>
        <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteForeverIcon>
        {console.log(props.todo)}
      </List>
    </>
    
  )
  
}

export default Todo