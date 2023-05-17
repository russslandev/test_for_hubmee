import React, { useEffect, useState } from 'react';
import { Container, Stack } from '@mui/material';
import TaskItem from './components/TaskItem';
import { useTypedDispatch, useTypedSelector } from './store';
import { getAllTasks } from './store/reducers/TaskListSlice';
import AddTaskForm from './components/AddTaskForm';
import SearchForm from './components/SearchForm';
import { filterTasks } from './helpers';

function App() {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isCheckedFilter, setIsCheckedFilter] = useState(false);
  const { tasks } = useTypedSelector((store) => store.taskList);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  return (
    <Container maxWidth='sm' sx={{ paddingTop: '34px' }}>
      <SearchForm
        isCheckedFilter={isCheckedFilter}
        setIsCheckedFilter={setIsCheckedFilter}
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />

      <Stack sx={{ mb: '16px' }} spacing={2}>
        {filterTasks(tasks, searchInputValue, isCheckedFilter).map(({ task, checked, id }) => (
          <TaskItem key={id} task={task} checked={checked} id={id} filterString={searchInputValue} />
        ))}
      </Stack>
      <AddTaskForm />
    </Container>
  );
}

export default App;
