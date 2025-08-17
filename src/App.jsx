import { useState,useEffect } from 'react'
import './App.css'
import { TodoProvider } from './context/index'
import TodoItem from './components/todoItem'
import TodoForm from './components/todoForm'
// import { usetodo } from './context'
function App (){
  const [todos,setTodos]= useState([])
  
  const addToDo = (message)=>{
    setTodos((prev)=>[...prev ,{id:Date.now(),...message}])
  }
  const updatedtoDo = (id,message)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo,...message}:prevTodo))
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!=id))
  }
  const iscompleted = (id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo, completed:!prevTodo.completed}:prevTodo ))
  }
useEffect (()=>{
  
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
    setTodos(Array.isArray(todos)?todos:[]);
    }
  
},[])
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <TodoProvider value={{todos,setTodos,addToDo,deleteTodo,updatedtoDo,iscompleted}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                    
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                   {todos.map((todo)=>(
                    <div key={todo.id} className="w-full">
                      <TodoItem todo = {todo}/>
                    </div>
                   ))}
                      
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
