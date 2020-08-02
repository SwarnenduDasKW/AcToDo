import React from 'react'
import { List, ListItem, ListItemText,ListItemIcon,Button,IconButton } from "@material-ui/core";
import "./Todo.css";
import db from "./firebase";
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';


function Todo(todoSentFromApp) {

    return (
        <div className="todo__listoftodos">
            <List className="todo__list">
                <ListItem>
                    <ListItemIcon>
                        <AssignmentTurnedInIcon />
                    </ListItemIcon>
                    <ListItemText primary={todoSentFromApp.todo.todoText} secondary="" />
                </ListItem>               
                <IconButton color="primary" aria-label="delete" type="submit"  onClick={event => 
                        {db.collection('todos').doc(todoSentFromApp.todo.id).delete();}}>
                    <DeleteIcon />
                </IconButton>
            </List>
        </div>
    )
}

export default Todo
