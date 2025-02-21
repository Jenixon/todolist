import React from 'react'

const Todoitem = ({ text,isComplete ,id,toggleTask,delTodo}) => {
  return (
    <div className="flex justify-between items-center gap-2">
    <label className={`hover:bg-slate-100 p-2 rounded-md flex-1 cursor-pointer select-none ${isComplete ?"line-through text-slate-600":""}`}    onClick={()=> toggleTask(id)} >{text}</label>
    <div  onClick={()=>delTodo(id)} className='size-[26px] p-1 rounded-md hover:bg-red-50'>
    <svg  className='hover:fill-red-700' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5D0E07"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
    </div>
  </div>
  
  )
}

export default Todoitem
