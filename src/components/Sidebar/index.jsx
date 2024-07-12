import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import Typography from '@mui/material/Typography';

import { FormattedMessage } from 'react-intl';
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

const Sidebar = () => (
  <div className={classes.sidebar}>
    <Box>
      <Stepper orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>
                <FormattedMessage id={step.description} />
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  </div>
);

export default Sidebar;
