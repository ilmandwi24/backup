import CheckboxAddOns from '@components/CheckboxAddOns';
import PropTypes from 'prop-types';

import ButtonStep from '@components/Button';
import { useDispatch, connect } from 'react-redux';
import { setStepBack, setStepNext } from '@containers/App/actions';
import { createStructuredSelector } from 'reselect';
import { selectAddOns } from '@containers/App/selectors';
import { Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import classes from './style.module.scss';

const AddOns = ({ addOns }) => {
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(setStepBack());
  };
  const handleNext = () => {
    if (addOns.length === 0) {
      alert('Please select add-ons');
      return;
    }
    dispatch(setStepNext());
  };
  return (
    <div className={classes.container}>
      <div className={classes.addons}>
        <h2>Pick add-ons</h2>
        <p style={{ margin: 0, marginBottom: '20px' }}>
          <Typography variant="desc">
            <FormattedMessage id="app_personal_info_description" />
          </Typography>
        </p>
        <CheckboxAddOns addons="Online Service" description="Access to multiplayer games" price="+$1/mo" />
        <CheckboxAddOns addons="Larger storage" description="Extra 1TB of cloud save" price="+$2/mo" />
        <CheckboxAddOns addons="Customizable profile" description="Custom theme on your profile" price="+$2/mo" />
      </div>
      <div className={classes.button}>
        <ButtonStep message="button_goback" click={handleBack} />
        <ButtonStep message="button_nextstep" click={handleNext} typevariant="contained" />
      </div>
    </div>
  );
};

AddOns.propTypes = {
  addOns: PropTypes.array.isRequired,
};
const mapStateToProps = createStructuredSelector({
  addOns: selectAddOns,
});
export default connect(mapStateToProps)(AddOns);
