import {createSlice,nanoid} from "@reduxjs/toolkit" 

const initialState = {
    todos:[],
    edit: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo={
                id: nanoid(),
                text: action.payload
            }
            state.todos=[todo, ...state.todos]
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id!==action.payload)
            state.edit=[]
        },
        updateTodo: (state,action)=>{
            state.todos = state.todos.map((todo)=> (todo.id===action.payload[0])?{...todo,text:action.payload[1]}:todo)
        },
        editTodo:(state,action)=>{
            state.edit=[action.payload[0],action.payload[1]]
            
        },
        finalUpdate:(state,action)=>{
            state.todos = state.todos.map((todo)=> (todo.id===state.edit[0])?{...todo,text:action.payload}:todo)
            state.edit=[]
        }

    }
})

export const {addTodo,removeTodo,updateTodo,editTodo,finalUpdate} = todoSlice.actions

export default todoSlice.reducer