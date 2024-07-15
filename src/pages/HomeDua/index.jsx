import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { Skeleton } from '@mui/material';

import { selectLoading, selectStep } from '@containers/App/selectors';

import Sidebar from '@components/Sidebar';
import AddOns from '@components/Add-Ons';
import PersonalInfo from '@components/PersonalInfo';
import CardSelectPlan from '@components/SelectPlan/CardSelectPlan';
import CountPayment from '@components/CountPayment';
import classes from './style2.module.scss';

const HomeDua = ({ loading, step }) => {
  if (loading) {
    return (
      <div className={classes.wrapper}>
        <Skeleton variant="text" width="12.5rem" />
        <Skeleton variant="text" width="25rem" />
      </div>
    );
  }
  let bodyValue;

  if (step === 1) {
    bodyValue = <PersonalInfo />;
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
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.content}>{bodyValue}</div>
      </div>
    </div>
  );
};

HomeDua.propTypes = {
  loading: PropTypes.bool,
  step: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  step: selectStep,
});

export default injectIntl(connect(mapStateToProps)(HomeDua));
