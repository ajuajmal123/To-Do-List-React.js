import React from 'react'

function TodoForm({handleTodo,toDo,editId,setTodo}) {
  return (
    <div>
       <form className='toDoForm' onSubmit={handleTodo}>
         <input type="text" value={toDo} onChange={(e)=>setTodo(e.target.value)}/>
         <button type='submit'>{editId?'Edit':'Go'}</button>
      </form>
    </div>
  )
}

export default TodoForm
