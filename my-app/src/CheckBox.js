import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Click from './Click';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };




 

export default function SizeCheckboxes() {


 
                   
  
  return (
    <div >
        
        <Checkbox
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        />
    </div>
  );
}
