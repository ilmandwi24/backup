import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Skeleton } from '@mui/material';

import { selectLoading } from '@containers/App/selectors';

import CardSelectPlan from '@components/CardSelectPlan';
import classes from './style.module.scss';

const SampleSelectPlan = ({ loading, intl: { formatMessage } }) => {
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
      <h3 style={{ display: 'none' }}>
        <FormattedMessage id="app_greeting_1" values={{ name: 'PhinSquad' }} />
      </h3>
      <p style={{ display: 'none' }}>{formatMessage({ id: 'app_greeting_2' })}</p>
      <CardSelectPlan />
    </div>
  );
};

SampleSelectPlan.propTypes = {
  loading: PropTypes.bool,
  intl: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
});

export default injectIntl(connect(mapStateToProps)(SampleSelectPlan));
