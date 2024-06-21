import { createSlice } from '@reduxjs/toolkit';
import nanoId from 'nano-id';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { list: [{ status: 'done', id: 1, title: 'Balex' }] },
  reducers: {
    add: {
      reducer(state, action) {
        return { list: [...state.list, action.payload] };
      },
      prepare(title, description) {
        const id = nanoId();
        return {
          payload: {
            title,
            id,
            description,
          },
        };
      },
    },
    remove: (state, action) => ({
      list: state.list.filter((t) => t.id !== action.payload),
    }),
    changeStatus: (state, action) => {
      //We can mutate the state in createSlice
      const todo = state.list.find((t) => t.id === action.payload.id);
      todo.status = action.payload.status;
    },
    update: (state, action) => ({
      list: state.map((t) =>
        t.id === action.payload.id ? { ...action.payload.update, id: t.id } : t
      ),
    }),
  },
});

export const { add, remove, changeStatus } = todoSlice.actions;

export const selectTodo = (state) => state.todo.list;

export default todoSlice.reducer;
