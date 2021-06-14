import { List, ListItemText } from '@material-ui/core'
import './Todo.css';
import React from 'react';
import {db} from './firbase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
function ToDo(props) {
    return (
        <List className='todo_list'>
                <ListItemText primary={props.text.todo}></ListItemText>
            <DeleteForeverIcon onClick = {()=>{
                db.collection('todos').doc(props.text.id).delete()
            }}/>
        </List>
    )
}

export default ToDo
