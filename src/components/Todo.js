import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTask, editTask}) => {
  return (
    <div className='task-p'>
        <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
    <div>
   <FontAwesomeIcon icon={faPenToSquare} className='edit-icon' onClick={()=> editTask(task.id)}/>
   <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTask(task.id)} className='delete-icon'/>
   </div>

    </div>
  )
}
