import { Box, Typography } from '@mui/material';

const Feedback = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      textAlign: 'center',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      width: '70%',
      margin: '0 auto',
    }}
  >
    <img src="./src/static/images/icon-thank-you.svg" alt="checklist" width={100} style={{ alignSelf: 'center' }} />
    <Typography variant="h5" fontWeight="bold" color="hsl(213, 89%, 18%)">
      Thank you!
    </Typography>
    <Typography color="gray">
      Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please
      feel free to email us at support@loremgaming.com.
    </Typography>
  </Box>
);

export default Feedback;
