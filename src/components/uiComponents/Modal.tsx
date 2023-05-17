import React, { FC } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  submitFunc: () => void;
}

const Modal: FC<IProps> = ({ handleClose, isOpen, submitFunc }) => {
  const onSubmit = () => {
    submitFunc();
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>Are you sure you want to delete it?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={onSubmit} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
