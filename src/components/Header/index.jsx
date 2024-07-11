import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Header = ({ title, description }) => (
  <div>
    <Typography variant="h4" component="h1" fontWeight="bold">
      {title}
    </Typography>
    <Typography component="p" color="gray">
      {description}
    </Typography>
  </div>
);

Header.propTypes = {
  title: PropTypes.element.isRequired,
  description: PropTypes.element.isRequired,
};

export default Header;
