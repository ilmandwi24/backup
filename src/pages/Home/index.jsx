import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Skeleton } from '@mui/material';

import { selectLoading } from '@containers/App/selectors';

import AddOns from '@components/Add-Ons';
import Sidebar from '@components/Sidebar';
import classes from './style.module.scss';

const Home = ({ loading, intl: { formatMessage } }) => {
  if (loading) {
    return (
      <div className={classes.wrapper}>
        <Skeleton variant="text" width="200px" />
        <Skeleton variant="text" width="400px" />
      </div>
    );
  }
  return (
    <div className={classes.wrapper}>
      <Sidebar />
    </div>
  );
};

Home.propTypes = {
  loading: PropTypes.bool,
  intl: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
});

export default injectIntl(connect(mapStateToProps)(Home));
