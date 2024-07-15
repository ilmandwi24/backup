import PropTypes from 'prop-types';
import { Checkbox } from '@mui/material';

import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAddOns } from '@containers/App/selectors';
import { setAddOns } from '@containers/App/actions';
import classes from './style.module.scss';

const CheckboxAddOns = ({ addons, description, price, addOns }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  console.log(addOns);

  const handleCheckboxChange = () => {
    setChecked((prevState) => {
      const newState = !prevState;
      dispatch(setAddOns(addons, price, newState));
      return newState;
    });
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
  addOns: PropTypes.array.isRequired,
};
const mapStateToProps = createStructuredSelector({
  addOns: selectAddOns,
});
export default connect(mapStateToProps)(CheckboxAddOns);
