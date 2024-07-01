import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


export default function ToDoList({task,deleteToDo,editToDo,completeToDo}) {

    return (
        <div className="Todo">
            <div className="task-container">
                <p className="task">{task.task}</p>
                <p className="description">{task.description}</p>
            </div>
            <div className="icon-container">
                {task.completed ? 
                    <FontAwesomeIcon onClick={() => completeToDo(task.id)} className="complete-icon" icon={faTimes} /> :
                    <FontAwesomeIcon onClick={() => completeToDo(task.id)} className="complete-icon" icon={faCheck} />

                }
                <FontAwesomeIcon onClick={() => editToDo(task.id)} className="edit-icon" icon={faPenToSquare} />
                <FontAwesomeIcon onClick={() => deleteToDo(task.id)} className="delete-icon" icon={faTrash} />
            </div>
        </div>
    )
}
