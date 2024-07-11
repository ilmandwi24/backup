import { InputLabel, TextField, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import ButtonStep from '@components/Button';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classes from './style.module.scss';

const schema = yup
  .object()
  .shape({
    name: yup.string().required('This field is required'),
    email: yup.string().required('This field is required'),
    phone: yup.number().typeError('This field must be a number').required('This field is required'),
  })
  .required();

const PersonalInfo = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={classes.containerPersonal}>
      <div className={classes.formWrapper}>
        <h2>
          <FormattedMessage id="app_personal_info" />
        </h2>
        <small>
          <FormattedMessage id="app_personal_info_description" />
        </small>
      </div>
      <div className={classes.formControl}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            render={({ field, formState }) => (
              <>
                <InputLabel shrink sx={{ color: 'black' }}>
                  <div className={classes.labelControl}>
                    <FormattedMessage id="info_name" />
                    <Typography sx={{ color: 'red' }}>{formState.errors?.name?.message}</Typography>
                  </div>
                </InputLabel>
                <TextField {...field} fullWidth size="small" type="text" error={!!formState.errors?.name} />
              </>
            )}
            name="name"
            control={control}
            defaultValue=""
          />

          <div>
            <Controller
              render={({ field, formState }) => (
                <>
                  <InputLabel shrink sx={{ color: 'black' }}>
                    <div className={classes.labelControl}>
                      <FormattedMessage id="info_email" />
                      <Typography sx={{ color: 'red' }}>{formState.errors?.email?.message}</Typography>
                    </div>
                  </InputLabel>
                  <TextField {...field} size="small" fullWidth type="text" error={!!formState.errors?.email} />
                </>
              )}
              name="email"
              control={control}
              defaultValue=""
            />
          </div>
          <div>
            <Controller
              render={({ field, formState }) => (
                <>
                  <InputLabel shrink sx={{ color: 'black' }}>
                    <div className={classes.labelControl}>
                      <FormattedMessage id="info_phone" />
                      <Typography sx={{ color: 'red' }}>{formState.errors?.phone?.message}</Typography>
                    </div>
                  </InputLabel>
                  <TextField {...field} size="small" fullWidth type="text" error={!!formState.errors?.phone} />
                </>
              )}
              name="phone"
              control={control}
              defaultValue=""
            />
          </div>
          <div className={classes.personalButton}>
            <ButtonStep message="button_step" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
