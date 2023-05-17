import React from 'react';
import { Box } from '@mui/material';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import Input from './uiComponents/Input';
import CustomButton from './uiComponents/Button';
import { useTypedDispatch } from '../store';
import { addTask } from '../store/reducers/TaskListSlice';

const AddTaskForm = () => {
  const dispatch = useTypedDispatch();

  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data: FieldValues) => {
    dispatch(addTask({ task: data.textValue, checked: false, id: Math.random().toString() }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
        }}
      >
        <Controller
          rules={{
            minLength: {
              value: 2,
              message: 'Min length',
            },
            required: 'Radfsf',
          }}
          name={'textValue'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              error={!!errors?.textValue?.message}
              onChange={onChange}
              value={value || ''}
              label='Your task'
              placeholder='Write your checklist text here'
            />
          )}
        />
        <CustomButton clickHandler={handleSubmit(onSubmit)} width={120} label='Add' />
      </Box>
    </form>
  );
};

export default AddTaskForm;
