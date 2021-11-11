import ApiService from './apiService';

export const getAllTodo = async() => {
    const { data } = await ApiService.post('/todo/s');
    return data.data;
}

export const createTodo = (data: {}) => {
    return ApiService.post('/todo', {...data})
}

export const updateTodo = (data: any) => {
    return ApiService.put(`/todo/${data?._id}`, { ...data })
}

export const deleteTodo = (data: { _id: string}) => {
    return ApiService.delete(`/todo/${data?._id}`)
}