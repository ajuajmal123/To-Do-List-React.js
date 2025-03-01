import { useState } from 'react'
import './App.css'

function App() {
  
const [toDo,setTodo]=useState('')
const [toDos,setToDos]=useState([])
const [editId,setEditId]=useState(0)
const handleTodo=(e)=>{
 e.preventDefault()

 if(editId){
  const editTodo=toDos.find((to)=>to.id===editId)
  const updatedTodo=toDos.map((to)=>
   
    to.id===editTodo.id?(to={id:to.id,toDo}):{id:to.id,toDo:to.toDo}
  );
  setToDos(updatedTodo)
  setEditId(0)
  setTodo('')
  return;
 }
    if(toDo!==''){
      setToDos([{id:`${toDo}-${Date.now()}`,toDo},...toDos])
      setTodo('')
    }
}

const handleDelete=(id)=>{
      const deleteTodo=toDos.filter((to)=>to.id!==id)
      setToDos([...deleteTodo])
}

const handleEdit=(id)=>{
const editTodo=toDos.find((to)=>to.id===id)
setTodo(editTodo.toDo)
setEditId(id)
}
  return (
    <>
     <div className='App'> 
      
   <div className="container">
    <h1>To-Do List</h1>
      <form className='toDoForm' onSubmit={handleTodo}>
         <input type="text" value={toDo} onChange={(e)=>setTodo(e.target.value)}/>
         <button type='submit'>{editId?'Edit':'Go'}</button>
      </form>

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
      
       </div>
    
    </>
  )
}

export default App
