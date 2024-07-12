import { Box, styled, Switch } from '@mui/material';
import PropTypes from 'prop-types';
// import iconArcade from '@static/images/en.png';
import ButtonStep from '@components/Button';
import { injectIntl } from 'react-intl';
import { selectSelectPlan } from '@containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { connect, useDispatch } from 'react-redux';
import { updateYearlySelectPlan } from '@containers/App/actions';
import { useState } from 'react';
import classes from './csp.module.scss';

const CardSelectPlan = ({ intl: { formatMessage }, selectPlan }) => {
  const [paket, setPaket] = useState(0);
  const dispatch = useDispatch();

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
  // console.log(selectPlan);
  // const isActive = true;
  return (
    <Box className={classes.container}>
      <h1>{formatMessage({ id: 'app_select_your_plan' })}</h1>
      <p>{formatMessage({ id: 'app_select_plan_description' })}</p>
      {/* List package */}
      <Box className={classes.listPlan}>
        <Box className={`${classes.plan} ${paket === 1 ? classes.active : ''}`} onClick={() => setPaket(1)}>
          <Box className={classes.icon}>
            <span>
              <img src="src/static/images/icon-arcade.svg" alt="icon arcade" />
            </span>
          </Box>
          <Box className={classes.desc}>
            <h3>{formatMessage({ id: 'app_plan_arcade' })}</h3>
            <span className={classes.price}>
              {selectPlan.tahunan
                ? formatMessage({ id: 'app_arcade_price_yearly' })
                : formatMessage({ id: 'app_arcade_price' })}
            </span>
            {selectPlan.tahunan && <span className={classes.free}>{formatMessage({ id: 'app_2months' })}</span>}
          </Box>
        </Box>
        <Box className={`${classes.plan} ${paket === 2 ? classes.active : ''}`} onClick={() => setPaket(2)}>
          <Box className={classes.icon}>
            <span>
              <img src="src/static/images/icon-advanced.svg" alt="icon arcade" />
            </span>
          </Box>
          <Box className={classes.desc}>
            <h3>{formatMessage({ id: 'app_plan_advanced' })}</h3>
            <span className={classes.price}>
              {selectPlan.tahunan
                ? formatMessage({ id: 'app_advanced_price_yearly' })
                : formatMessage({ id: 'app_advanced_price' })}
            </span>
            {selectPlan.tahunan && <span className={classes.free}>{formatMessage({ id: 'app_2months' })}</span>}
          </Box>
        </Box>
        <Box className={`${classes.plan} ${paket === 3 ? classes.active : ''}`} onClick={() => setPaket(3)}>
          <Box className={classes.icon}>
            <span>
              <img src="src/static/images/icon-pro.svg" alt="icon arcade" />
            </span>
          </Box>
          <Box className={classes.desc}>
            <h3>{formatMessage({ id: 'app_plan_pro' })}</h3>
            <span className={classes.price}>
              {selectPlan.tahunan
                ? formatMessage({ id: 'app_pro_price_yearly' })
                : formatMessage({ id: 'app_pro_price' })}
            </span>
            {selectPlan.tahunan && <span className={classes.free}>{formatMessage({ id: 'app_2months' })}</span>}
          </Box>
        </Box>
      </Box>

      <Box className={classes.switch}>
        {/* TODO:: SWITCH SELECT PLAN CHANGED */}
        {formatMessage({ id: 'app_plan_monthly' })}{' '}
        <CustomSwitch
          checked={selectPlan.tahunan}
          onChange={() => dispatch(updateYearlySelectPlan(selectPlan.tahunan))}
        />
        {formatMessage({ id: 'app_plan_yearly' })}
      </Box>

      <Box className={classes.buttonStep}>
        <ButtonStep message={formatMessage({ id: 'button_goback' })} />
        <ButtonStep message={formatMessage({ id: 'button_nextstep' })} typevariant="contained" />
      </Box>
    </Box>
  );
};

CardSelectPlan.propTypes = {
  intl: PropTypes.object,
  selectPlan: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  selectPlan: selectSelectPlan,
});
export default injectIntl(connect(mapStateToProps)(CardSelectPlan));
