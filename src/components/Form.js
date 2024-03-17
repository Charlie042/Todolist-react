import {React, useState}from 'react'


export const Form = ({addTodo}) => {
    const [value , setValue] = useState("");

    const handleSubmit = e =>{
         e.preventDefault();
         addTodo(value)
         setValue("")
    }
  return (
    <div className='form'>
    <form onSubmit={handleSubmit}>
        <input className='form-input'
            type='text'
            value={value}
            placeholder="What's your plan today?"
            onChange={e => setValue(e.target.value)}
        />
        <button type='submit' className='input-btn'>Add task</button>
    </form>
</div>

  )
}
