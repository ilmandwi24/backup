import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { Skeleton } from '@mui/material';

import { selectInfo, selectLoading, selectStep } from '@containers/App/selectors';

import Sidebar from '@components/Sidebar';
import AddOns from '@components/Add-Ons';
import PersonalInfo from '@components/PersonalInfo';
import CardSelectPlan from '@components/SelectPlan/CardSelectPlan';
import CountPayment from '@components/CountPayment';
import classes from './style.module.scss';

const Home = ({ loading, step, info }) => {
  if (loading) {
    return (
      <div className={classes.wrapper}>
        <Skeleton variant="text" width="200px" />
        <Skeleton variant="text" width="400px" />
      </div>
    );
  }
  let bodyValue;

  if (step === 1) {
    bodyValue = <PersonalInfo info={info} />;
  }
  if (step === 2) {
    bodyValue = <CardSelectPlan />;
  }
  if (step === 3) {
    bodyValue = <AddOns />;
  }
  if (step === 4) {
    bodyValue = <CountPayment />;
  }
  return (
    <div className={classes.wrapper}>
      <Sidebar />
      <div>{bodyValue}</div>
    </div>
  );
};

Home.propTypes = {
  loading: PropTypes.bool,
  step: PropTypes.number,
  info: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  step: selectStep,
  info: selectInfo,
});

export default injectIntl(connect(mapStateToProps)(Home));
