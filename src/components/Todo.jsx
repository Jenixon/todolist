import React, { useEffect, useRef, useState } from 'react'
import Todoitem from '../Todoitem';


const Todo = () => {

  const [todoList,SetTodoList] =useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):[]);


const inputref=useRef([])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todoList))

},[todoList])

///........add task..........

  const Addtask =()=>{
    const inputtext=inputref.current.value.trim();

    if(inputtext===""){
      return null;
    }
    const newTodo={
      id:Date.now(),
      text:inputtext,
      isComplete:false
    }
    SetTodoList((prev)=>[...prev,newTodo])

    ///.... add the datas after that it automatoically clear
    inputref.current.value="";

  }
 ///.............line through the entered datas...........
  const toggleTask=(id)=>{
    SetTodoList((prev)=>{
      return prev.map((todo)=> {
        if(id===todo.id){
          return{...todo,isComplete:!todo.isComplete}
        }
        return todo;
     
    })
    })
}

const delTodo=(id)=>{
  SetTodoList((prev)=>{
    return prev.filter((todo)=> todo.id!==id)

  })
}
  return (
    <>
    <div className="w-[30-rem]">
        <h1 className='text-lg my-2 font-medium text-amber-500'>TO-DO-LIST</h1>
        <div className="flex gap-2">
          <div className='flex-1' >
            <input ref={inputref}type="text" name="" id="" className='py-3 px-4 w-full focus:border-amber-400 border focus:outline-none' placeholder='Add Your Task'/>
          </div>
          <button className="py-3 px-4 bg-blue-600 hover:bg-blue-700 text-sm rounded-sm " onClick={Addtask}>ADD TASK</button>
        </div>
        <p className='my-3 text-sm text-zinc-400 px-1'>Fill task details</p>
      
    </div>
    <div className='w-[30-rem] bg-white shadow py-6 px-4'>
      <fieldset className='space-y-3'>
        <legend className='text-pink-600 font-medium'>
          List of Tasks
        </legend>
       

      {/* <Todoitem text={'reading books'}/>
      <Todoitem text={'learning coding'}/>
      <Todoitem text={'playing'}/> */}

      {todoList.length===0?(<p className='text-gray-500 text-sm'> No task found</p>):(
         todoList.map((todo,index)=>{
          return<Todoitem text={todo.text} key={index} isComplete={todo.isComplete} id={todo.id} toggleTask={toggleTask} delTodo={delTodo}/>;

         })

      )}
      
      </fieldset>

    </div>
    </>
  )
}

export default Todo;
