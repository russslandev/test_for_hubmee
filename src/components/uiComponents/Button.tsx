import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { FC, ReactNode } from 'react';

const StyledButton = styled(
  Button,
  {}
)((theme: { active: string; width?: number }) => ({
  background: theme.active ? '#5DCB42' : 'transparent',
  color: theme.active ? '#fff' : '#5DCB42',
  borderColor: '#5DCB42',
  height: 43,
  minWidth: 95,
  width: theme.width,
  marginLeft: 10,
  textTransform: 'none',
  '&:hover': {
    background: '#5DCB42',
    color: '#fff',
    borderColor: '#5DCB42',
  },
}));

interface IProps {
  children?: ReactNode;
  label: string;
  isActive?: boolean;
  width?: number;
  clickHandler?: () => void;
}

const CustomButton: FC<IProps> = ({ children, isActive, label, width, clickHandler }) => {
  return (
    <StyledButton onClick={clickHandler} active={isActive ? 'active' : ''} variant='outlined' width={width}>
      {children}
      {label}
    </StyledButton>
  );
};

export default CustomButton;
