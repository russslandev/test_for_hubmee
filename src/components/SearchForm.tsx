import React, { FC } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Box } from '@mui/material';
import CustomButton from './uiComponents/Button';
import Input from './uiComponents/Input';

interface IProps {
  searchInputValue: string;
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>;
  isCheckedFilter: boolean;
  setIsCheckedFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchForm: FC<IProps> = ({ isCheckedFilter, searchInputValue, setIsCheckedFilter, setSearchInputValue }) => {
  const resetFilters = () => {
    setIsCheckedFilter(false);
    setSearchInputValue('');
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        mb: '16px',
      }}
    >
      <Input value={searchInputValue} onChange={setSearchInputValue} placeholder='Search By Text...' />
      <CustomButton clickHandler={resetFilters} isActive={!searchInputValue && !isCheckedFilter} label='All' />
      <CustomButton clickHandler={() => setIsCheckedFilter(!isCheckedFilter)} isActive={isCheckedFilter} label='Done'>
        <CheckCircleOutlineIcon sx={{ height: '16px', width: '16px', mr: '5px' }} />
      </CustomButton>
    </Box>
  );
};

export default SearchForm;
