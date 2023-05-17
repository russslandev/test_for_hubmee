import { createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types';

const initialState: {
  tasks: ITask[];
} = {
  tasks: [],
};

const TaskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    getAllTasks(state) {
      const allTasks = JSON.parse(localStorage.getItem('tasks') as string);
      if (!allTasks?.length) return;
      state.tasks = allTasks;
    },
    addTask(state, action) {
      state.tasks.unshift(action?.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action?.payload?.id);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    checkTask(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      state.tasks = !(task as ITask).checked
        ? [...state.tasks.filter((task) => task.id !== action.payload.id), { ...(task as ITask), checked: !(task as ITask).checked }]
        : [{ ...(task as ITask), checked: !(task as ITask).checked }, ...state.tasks.filter((task) => task.id !== action.payload.id)];
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export const { getAllTasks, addTask, removeTask, checkTask } = TaskListSlice.actions;

export default TaskListSlice.reducer;
