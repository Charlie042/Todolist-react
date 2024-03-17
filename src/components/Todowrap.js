import {React, useState} from 'react'
import { Form } from './Form'
import { v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import { Editing } from './Editing';

uuidv4();
export const Todowrap = () => {
    const [todo,setTodo] = useState([]);

    const addTodo = (task) => {
                setTodo ([...todo,  {
            
            id: uuidv4(),
            task: task,
            completed : false,
            forEditing: false
        }])
            }
            const toggleComplete = id => {
                setTodo(todo.map(todos => todos.id === id ? {...todos, completed: !todos.completed}: todos))
           }
           const deleteTask = id => {
            setTodo(todo.filter(todos => todos.id !== id))
           }
           const editTask = id => {
            setTodo(todo.map(todos => 
                todos.id === id ? {...todos, forEditing: !todos.forEditing}:todos
            ))
           }
           const editTodo = (task,id) => {
            setTodo(todo.map(todos => todos.id === id ? {...todos, task, forEditing : !todos.forEditing}: todos))
           }
  return (
    <div className='Todowrap'>
        <h1>Todo-list</h1>
        <Form addTodo= {addTodo}/>
        {todo.map((todos, index)=> {
          return  todos.forEditing ? (<Editing editTask={editTodo} task={todos}/>)
            :(<Todo task={todos} key={index} toggleComplete={toggleComplete} 
            deleteTask={deleteTask} editTask={editTask}/>
        )
            })} 

    </div>
  )
}
