import { Box, Checkbox, Paper, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useTypedDispatch } from '../store';
import { checkTask, removeTask } from '../store/reducers/TaskListSlice';
import TextHighlighter from './TextHighlighter';
import Modal from './uiComponents/Modal';

interface IProps {
  task: string;
  checked: boolean;
  id: string;
  filterString?: string;
}

const TaskItem: FC<IProps> = ({ checked, id, task, filterString }) => {
  const [isShowTrashIcon, setIsShowTrashIcon] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  const dispatch = useTypedDispatch();

  const handleCheckTask = () => {
    dispatch(checkTask({ id }));
  };

  const handleRemoveTask = () => {
    dispatch(removeTask({ id }));
  };

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: '#F3F3F3',
        },
      }}
    >
      <Checkbox
        onClick={handleCheckTask}
        checked={checked}
        sx={{
          '&.Mui-checked': {
            color: '#5DCB42',
          },
          color: '#C4C4C4',
        }}
      />
      <Typography sx={{ textDecoration: checked ? 'line-through' : 'none' }}>
        {filterString ? <TextHighlighter text={task} keyword={filterString} /> : task}
      </Typography>
      <Box
        sx={{ marginLeft: 'auto', '&:hover': { cursor: 'pointer' } }}
        onMouseEnter={() => setIsShowTrashIcon(true)}
        onMouseLeave={() => setIsShowTrashIcon(false)}
      >
        {isShowTrashIcon ? <DeleteForeverIcon onClick={() => setIsShowDeleteModal(true)} sx={{ color: '#F33A3D' }} /> : <MoreVertIcon />}
      </Box>
      <Modal isOpen={isShowDeleteModal} handleClose={() => setIsShowDeleteModal(false)} submitFunc={handleRemoveTask} />
    </Paper>
  );
};

export default TaskItem;
