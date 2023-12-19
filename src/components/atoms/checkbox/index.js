import React from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps, FormControlLabel } from '@mui/material/';
// import Typography from '../typography';

const CheckBox = ({ label, ...props }) => {
  return <FormControlLabel control={<MuiCheckbox {...props} />} label={label} />;
};

export default CheckBox;
