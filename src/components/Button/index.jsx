import { Button } from '@mui/material';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

const ButtonStep = ({ click, message }) => (
  <Button
    variant="contained"
    sx={{ textTransform: 'none', backgroundColor: 'hsl(213, 71%, 31%)' }}
    onClick={click}
    type="submit"
    disableRipple
  >
    <FormattedMessage id={message} />
  </Button>
);

ButtonStep.propTypes = {
  click: PropTypes.func,
  message: PropTypes.string,
};

export default ButtonStep;
