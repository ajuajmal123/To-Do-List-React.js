import React from 'react'

function ToDoList({toDos,handleDelete,handleEdit}) {
  return (
    <div>
        <ul className='allTodos'>
    {toDos.map((t)=>{
      return(
      <li className='singleTodo' ><span className='toDotext' key={t.id}>{t.toDo}</span>
      <button onClick={()=>handleEdit(t.id)}>Edit</button>
      <button onClick={()=>handleDelete(t.id)}>Delete</button>
      </li>)
    })}
      </ul>   
    </div>
  )
}

export default ToDoList
