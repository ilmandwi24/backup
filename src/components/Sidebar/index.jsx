import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { selectStep } from '@containers/App/selectors';
import { connect, useDispatch } from 'react-redux';
import { setSidebarStep } from '@containers/App/actions';
import classes from './style.module.scss';

const steps = [
  {
    label: 'STEP 1',
    description: `app_your_information`,
  },
  {
    label: 'STEP 2',
    description: 'app_select_plan',
  },
  {
    label: 'STEP 3',
    description: `app_add_ons`,
  },
  {
    label: 'STEP 4',
    description: `app_summary`,
  },
];

const commonStyles = {
  // bgcolor: '#ffffff00',
  color: 'white',
  m: 1,
  border: '1px solid hsl(194, 67%, 85%)',
  width: '2rem',
  height: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 500,
};

const activeStyles = {
  backgroundColor: 'hsl(194, 67%, 85%)',
  color: 'hsl(215, 92%, 15%)',
};

const Sidebar = ({ step }) => {
  const dispatch = useDispatch();

  const handleStep = (stepnum) => {
    dispatch(setSidebarStep(stepnum));
  };
  return (
    <div className={classes.sidebar}>
      <Box className={classes.content}>
        <div className={classes.stepperDesktop}>
          <Stepper orientation="vertical" activeStep={step - 1}>
            {steps.map((sidebarStep, index) => (
              <Step key={sidebarStep.label}>
                <StepLabel>
                  <Button onClick={() => handleStep(index + 1)}>{sidebarStep.label}</Button>
                </StepLabel>
                <StepContent>
                  <Typography>
                    <FormattedMessage id={sidebarStep.description} />
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className={classes.stepperMobile}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {/* <Box sx={{ ...commonStyles, borderRadius: '50%' }}>1</Box>
            <Box sx={{ ...commonStyles, borderRadius: '50%' }}>2</Box>
            <Box sx={{ ...commonStyles, borderRadius: '50%' }}>3</Box>
            <Box sx={{ ...commonStyles, borderRadius: '50%' }}>4</Box> */}
            {steps.map((sidebarStep, index) => (
              // <Step key={sidebarStep.label}>
              //   <StepLabel>
              //     <Button onClick={() => handleStep(index + 1)}>{sidebarStep.label}</Button>
              //   </StepLabel>
              //   <StepContent>
              //     <Typography>
              //       <FormattedMessage id={sidebarStep.description} />
              //     </Typography>
              //   </StepContent>
              // </Step>
              <Box
                sx={
                  step === index + 1
                    ? { ...commonStyles, borderRadius: '50%', ...activeStyles }
                    : { ...commonStyles, borderRadius: '50%' }
                }
                key={sidebarStep.label}
                onClick={() => handleStep(index + 1)}
              >
                {index + 1}
              </Box>
            ))}
          </Box>
        </div>
      </Box>
    </div>
  );
};

Sidebar.propTypes = {
  step: PropTypes.number,
};
const mapStateToProps = createStructuredSelector({
  step: selectStep,
});

export default connect(mapStateToProps)(Sidebar);
