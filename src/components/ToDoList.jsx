import React from 'react'
import { Task } from './Task'

export const ToDoList = ({ tasks, setTasks }) => {

  
    const markAsDone = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].status = 'completed';
        setTasks(updatedTasks);
    }

    
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <div>
            <h2>Tasks</h2>
            {tasks.map((task, index) => (
                <Task 
                    key={index} 
                    name={task.name} 
                    status={task.status} 
                    markAsDone={() => markAsDone(index)} 
                    deleteTask={() => deleteTask(index)} 
                />
            ))}
        </div>
    )
}
