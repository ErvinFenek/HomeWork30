import { createSlice } from "@reduxjs/toolkit";
import {v4} from "uuid";

const ToDoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
        addToDo: (state, action, e) => {
            state.todos.push({
                id: v4(),
                text: action.payload,
                isDone: false,
            })
        },
        removeTodo (state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        isDoneHandler (state, action) {
            const isDoneTodo = state.todos.find(todo => todo.id === action.payload.id);
            isDoneTodo.isDone = !isDoneTodo.isDone;
        },
        onSelectChangeHandler (state, action) {

        },
    }
})

export const {addToDo, removeTodo, isDoneHandler, onSelectChangeHandler} = ToDoSlice.actions;

export default ToDoSlice.reducer;