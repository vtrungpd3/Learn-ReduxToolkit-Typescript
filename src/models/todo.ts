export interface ItemTodoState {
    _id?: string;
    name?: string;
    isComplete?: boolean
}

export type TodoState = {
    listTodo: ItemTodoState[];
    status: 'idle' | 'loading' | 'failed';
}
