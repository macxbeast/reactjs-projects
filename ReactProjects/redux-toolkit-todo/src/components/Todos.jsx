import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import TodoItem from "./TodoItem";

function Todos(){
    const todos = useSelector(state => state.todos)
    
    return (
    <>
    <ul className="list-none">
        {todos.map((todo) => (
            <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
            <TodoItem todo={todo}/>
            </li>
        ))}
    </ul>
    </>
    )
}

export default Todos