import { Box, styled, Switch } from '@mui/material';
import PropTypes from 'prop-types';
// import iconArcade from '@static/images/en.png';
import ButtonStep from '@components/Button';
import { injectIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { setStepBack, setStepNext } from '@containers/App/actions';
import classes from './csp.module.scss';

const CardSelectPlan = () => {
  const CustomSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
    ({ theme }) => ({
      width: 38,
      height: 19,
      padding: 0,
      '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 3.5,
        transitionDuration: '300ms',
        '&.Mui-checked': {
          transform: 'translateX(17.5px)',
          color: '#fff',
          '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.mode === 'dark' ? 'hsl(213, 96%, 18%)' : 'hsl(213, 96%, 18%)',
            opacity: 1,
            border: 0,
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
          },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
          color: '#33cf4d',
          border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color: theme.palette.mode === 'light' ? theme.palette.grey[600] : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: theme.palette.mode === 'light' ? '#2ECA45' : 0.3,
        },
      },
      '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 12.5,
        height: 12.5,
      },
      '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? 'hsl(213, 96%, 18%)' : 'hsl(213, 96%, 18%)',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
          duration: 500,
        }),
      },
    })
  );
  const isActive = true;

  const handleBack = () => {
    dispatch(setStepBack());
  };
  const handleNext = () => {
    dispatch(setStepNext());
  };
  return (
    <>
      <Box className={classes.container}>
        <h1>{formatMessage({ id: 'app_select_your_plan' })}</h1>
        <p>{formatMessage({ id: 'app_select_plan_description' })}</p>
        {/* List package */}
        <Box className={classes.listPlan}>
          <Box className={`${classes.plan} ${isActive ? classes.active : ''}`}>
            <Box className={classes.icon}>
              <span>
                <img src="src/static/images/icon-arcade.svg" alt="icon arcade" />
              </span>
            </Box>
            <Box className={classes.desc}>
              <h3>{formatMessage({ id: 'app_plan_arcade' })}</h3>
              <span className={classes.price}>{formatMessage({ id: 'app_arcade_price' })}</span>
              <span className={classes.free}>{formatMessage({ id: 'app_2months' })}</span>
            </Box>
          </Box>
          <Box className={classes.plan}>
            <Box className={classes.icon}>
              <span>
                <img src="src/static/images/icon-advanced.svg" alt="icon arcade" />
              </span>
            </Box>
            <Box className={classes.desc}>
              <h3>{formatMessage({ id: 'app_plan_advanced' })}</h3>
              <span className={classes.price}>{formatMessage({ id: 'app_advanced_price' })}</span>
              <span className={classes.free}>{formatMessage({ id: 'app_2months' })}</span>
            </Box>
          </Box>
          <Box className={classes.plan}>
            <Box className={classes.icon}>
              <span>
                <img src="src/static/images/icon-pro.svg" alt="icon arcade" />
              </span>
            </Box>
            <Box className={classes.desc}>
              <h3>{formatMessage({ id: 'app_plan_pro' })}</h3>
              <span className={classes.price}>{formatMessage({ id: 'app_pro_price' })}</span>
              <span className={classes.free}>{formatMessage({ id: 'app_2months' })}</span>
            </Box>
          </Box>
        </Box>

        <Box className={classes.switch}>
          {/* TODO:: SWITCH SELECT PLAN CHANGED */}
          {formatMessage({ id: 'app_plan_monthly' })} <CustomSwitch /> {formatMessage({ id: 'app_plan_yearly' })}
        </Box>

        <Box className={classes.buttonStep}>
          <ButtonStep message={formatMessage({ id: 'button_goback' })} />
          <ButtonStep message={formatMessage({ id: 'button_nextstep' })} typevariant="contained" />
        </Box>
      </Box>
      <div className={classes.button}>
        <ButtonStep message="button_goback" click={handleBack} />
        <ButtonStep message="button_step" click={handleNext} />
      </div>
    </>
  );
};

CardSelectPlan.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(CardSelectPlan);
