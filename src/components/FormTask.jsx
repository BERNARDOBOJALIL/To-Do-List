import React, { useState } from 'react'

export const FormTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask) {  
      addTask(newTask)
      setNewTask('') 
    }
  }
  
  return (
    <div>
        <label htmlFor="add_task">Add New Task</label>
        <input 
            type="text" 
            id="add_task" 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}  
        />
        <button onClick={handleAddTask}>Add task</button>
    </div>
  )
}
