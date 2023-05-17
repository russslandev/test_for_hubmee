import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import React, { FC } from 'react';

const CustomTextField = styled(
  TextField,
  {}
)((theme) => ({
  '& label.Mui-focused': {
    color: '#5DCB42',
  },
  '& label.Mui-error': {
    color: '#F33A3D',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'yellow',
  },
  '& .MuiOutlinedInput-root': {
    '& input': {
      fontSize: 14,
      height: 43,
      padding: '0 16px',
    },
    '& fieldset': {
      borderColor: '#F2EDED',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#5DCB42',
    },
    '&.Mui-error fieldset': {
      borderColor: '#F33A3D',
    },
  },
  '& .MuiFormHelperText-root': {
    color: '#F33A3D',
  },
  '& .MuiInputBase-root': {
    minWidth: '300px',
  },
}));

interface IProps {
  label?: string;
  error?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<IProps> = ({ error, label, placeholder, value, onChange }) => {
  return (
    <CustomTextField
      InputProps={{
        value,
        onChange: (e) => onChange(e.target.value),
      }}
      size='small'
      fullWidth
      error={error}
      label={label}
      placeholder={placeholder}
      helperText={error ? 'Error content - Minimum 2 characters' : ''}
    />
  );
};

export default Input;
