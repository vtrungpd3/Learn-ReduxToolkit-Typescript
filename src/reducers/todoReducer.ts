import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { TodoState } from '../models/todo';
import { listTodoSuccess } from '../actions/todoAction';

const initialState: TodoState = {
    listTodo: [],
    status: 'idle',
};

const todoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(listTodoSuccess, (state, action: { payload: any }) => {
            state.listTodo = action.payload || [];
        })
    }
);

// === Selector ===
export const listTodo = (state: RootState) => state.todoState.listTodo;

export default todoReducer;
