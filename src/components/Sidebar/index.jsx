import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import Typography from '@mui/material/Typography';

import classes from './style.module.scss';

const steps = [
  {
    label: 'STEP 1',
    description: `YOUR INFO`,
  },
  {
    label: 'STEP 2',
    description: 'SELECT PLAN',
  },
  {
    label: 'STEP 3',
    description: `ADD-ONS`,
  },
  {
    label: 'STEP 4',
    description: `SUMMARY`,
  },
];

const Sidebar = () => (
  <div className={classes.sidebar}>
    <Box>
      <Stepper orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel optional={index === 3 ? <Typography variant="caption">Last step</Typography> : null}>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  </div>
);

export default Sidebar;
