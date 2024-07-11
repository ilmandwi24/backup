import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { useState } from 'react';

const CountPayment = () => {
  const [format, setFormat] = useState('month');
  return (
    <>
      <Card sx={{ paddingY: '1rem', backgroundColor: 'hsl(217, 100%, 97%)', boxShadow: 'none' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography component="p" color="hsl(213, 89%, 18%)" fontWeight="bold">
                Arcade ({format === 'month' ? 'Monthly' : 'Yearly'})
              </Typography>
              <Typography component="a" color="gray" href="#">
                Change
              </Typography>
            </Box>
            <Typography component="p" color="hsl(213, 89%, 18%)" fontWeight="bold">
              $9/{format === 'month' ? 'mo' : 'yr'}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography component="p" color="gray">
              Online service
            </Typography>
            <Typography component="p" color="hsl(213, 89%, 18%)">
              +$10/{format === 'month' ? 'mo' : 'yr'}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography component="p" color="gray">
              Larger storage
            </Typography>
            <Typography component="p" color="hsl(213, 89%, 18%)">
              +$20/{format === 'month' ? 'mo' : 'yr'}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1rem',
          padding: '0 1rem',
        }}
      >
        <Typography component="p" color="gray">
          Total (per {format === 'month' ? 'month' : 'year'})
        </Typography>
        <Typography component="p" color="hsl(243, 73%, 58%)" fontWeight="bold">
          +$20/{format === 'month' ? 'mo' : 'yr'}
        </Typography>
      </Box>
    </>
  );
};

export default CountPayment;
