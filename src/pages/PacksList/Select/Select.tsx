

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
 
  '& .MuiInputBase-input': {
    width: '39',
    height: '24',
    position: 'relative',
    backgroundColor: ' #FFFFFF',
    border: '1px solid #635D80', 
        // opacity: '0.4',
    fontSize: '12',
    textAlign: 'center', 
    padding: '4px 9px 5px 6px',
    color: '#2D2E46',
    
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Lato',
    
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#21268F',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default function CustomizedSelects() {
  const [age, setAge] = React.useState('');
  const handleChange = (event: { target: { value: string } }) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">

        <Select
          value={age}
          displayEmpty
          id="demo-customized-select"
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
              <em>10</em>
          </MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={25}>25</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}




