import React from 'react'

export const Task = ({ name, status, markAsDone, deleteTask }) => {
  return (
    <>
      <p>{name} - {status === 'pending' ? '⏳ Pending' : '✅ Completed'}</p>
      <div>
          <button onClick={markAsDone}>Done</button>
          <button onClick={deleteTask}>Delete</button>
      </div>
    </>
  )
}
