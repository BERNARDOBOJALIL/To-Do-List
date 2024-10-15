import { useState } from 'react'
import './App.css'
import { ToDoList } from './components/ToDoList'
import { FormTask } from './components/FormTask'

function App() {
  const [tasks, setTasks] = useState([
    {name: 'Task 1', status: 'pending'},
    {name: 'Task 2', status: 'pending'},
    {name: 'Task 3', status: 'pending'},
  ])


  const addTask = (taskName) => {
    const newTask = { name: taskName, status: 'pending' }
    setTasks([...tasks, newTask]) 
  }

  return (
    <>
      <h1>ToDoList ✔</h1>
      <FormTask addTask={addTask} />
      <ToDoList tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App
