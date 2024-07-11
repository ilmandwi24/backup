import PropTypes from 'prop-types';
import { Checkbox } from '@mui/material';

import { useState } from 'react';
import classes from './style.module.scss';

const CheckboxAddOns = ({ addons, description, price }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div
      className={classes.checkboxaddons}
      style={checked ? { backgroundColor: 'hsl(229, 24%, 87%)' } : { backgroundColor: 'white' }}
    >
      <Checkbox
        checked={checked}
        onChange={handleCheckboxChange}
        sx={{ '&.Mui-checked': { color: 'hsl(243, 100%, 62%)' } }}
      />
      <div className={classes.addonsdesc}>
        <h4>{addons}</h4>
        <p>{description}</p>
      </div>
      <span>{price}</span>
    </div>
  );
};

CheckboxAddOns.propTypes = {
  addons: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CheckboxAddOns;
