import { configureStore } from '@reduxjs/toolkit';
import TaskListSlice from './reducers/TaskListSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    taskList: TaskListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type TypedDispatch = typeof store.dispatch;
export const useTypedDispatch: () => TypedDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
