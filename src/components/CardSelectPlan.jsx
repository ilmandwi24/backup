import { Box, styled, Switch } from '@mui/material';
// import iconArcade from '@static/images/en.png';
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
  return (
    <Box className={classes.container}>
      <h1>Select Your Plan</h1>
      <p>You have the option of monthly or yearly billing</p>
      {/* List package */}
      <Box className={classes.listPlan}>
        <Box className={`${classes.plan} ${isActive ? classes.active : ''}`}>
          <Box className={classes.icon}>
            <span>
              <img src="src/static/images/icon-arcade.svg" alt="icon arcade" />
            </span>
          </Box>
          <Box className={classes.desc}>
            <h3>Arcade</h3>
            <span className={classes.price}>$90/yr</span>
            <span className={classes.free}>2 months free</span>
          </Box>
        </Box>
        <Box className={classes.plan}>
          <Box className={classes.icon}>
            <span>
              <img src="src/static/images/icon-advanced.svg" alt="icon arcade" />
            </span>
          </Box>
          <Box className={classes.desc}>
            <h3>Advanced</h3>
            <span className={classes.price}>$120/yr</span>
            <span className={classes.free}>2 months free</span>
          </Box>
        </Box>
        <Box className={classes.plan}>
          <Box className={classes.icon}>
            <span>
              <img src="src/static/images/icon-pro.svg" alt="icon arcade" />
            </span>
          </Box>
          <Box className={classes.desc}>
            <h3>Pro</h3>
            <span className={classes.price}>$150/yr</span>
            <span className={classes.free}>2 months free</span>
          </Box>
        </Box>
      </Box>

      <Box className={classes.switch}>
        Montly <CustomSwitch /> Yearly
      </Box>
    </Box>
  );
};

export default CardSelectPlan;
