import {React, useState}from 'react'


export const Editing = ({editTask, task}) => {
    const [value , setValue] = useState(task.task);

    const handleSubmit = e =>{
         e.preventDefault();
         editTask(value, task.id)
         setValue("")
    }
  return (
    <div className='form'>
    <form onSubmit={handleSubmit}>
        <input className='form-input'
            type='text'
            value={value}
            placeholder="Update the task..."
            onChange={e => setValue(e.target.value)}
        />
        <button type='submit' className='input-btn'>Update</button>
    </form>
</div>

  )
}
