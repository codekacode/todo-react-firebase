import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from '@material-ui/core';
import "./Todo.css"
import { db } from './firebase';

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <TaskAltOutlinedIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Todo" secondary={props.todo.todo}/>
      </ListItem>
      <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete me ❌</Button>
      {console.log(props.todo)}
    </List>
  )
  
}

export default Todo