import React from 'react'
import { useForm } from "react-hook-form"
function Input({formHandler}) {
  let { register,handleSubmit ,reset} = useForm();
  let dataHandler  =  (data)=>{
    formHandler(data);
    reset();
  }
  return (
    <div className='w-1/2 mx-auto text-center pt-2'>
      <h1 className='text-8xl text-red-400 font-semibold w-full underline underline-offset-8'>Todo App</h1>
        <form className='mt-20 text-lg' action="" onSubmit={handleSubmit(data=>dataHandler(data))}>
            <input {...register('task')} className='px-10 py-3 font-semibold rounded-md outline-0' type="text" name="task" id="" placeholder='Add a task' />
            <button className='px-5 py-3 bg-green-700 text-white ml-2 rounded-xl'>Add</button>
        </form>
    </div>
  )
}

export default Input