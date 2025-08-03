import React, { useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
import { editTodo,finalUpdate } from "../features/todo/todoSlice";

function AddTodo (){
    const [input,setInput]=useState("")
    const dispatch=useDispatch()
    const editText=useSelector(state => state.edit)

    const handleSubmit = (e)=>{
      e.preventDefault();
      if(editText.length===0){
        if(input)dispatch(addTodo(input))
      }
      else{
        if(input) dispatch(finalUpdate(input))
      }
      setInput("")
    }

    useEffect(()=>{
      if(editText.length!==0){
        setInput(editText[1])
      }
      else{
        setInput("")
      }
    },[editText])
        

    

    return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editText.length===0?"Add Todo":"Update Todo"}
      </button>
    </form>
    )
}


export default AddTodo