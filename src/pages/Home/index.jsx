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
import classes from './style.module.scss';

const Home = ({ loading, step }) => {
  if (loading) {
    return (
      <div className={classes.wrapper}>
        <Skeleton variant="text" width="200px" />
        <Skeleton variant="text" width="400px" />
      </div>
    );
  }
  let bodyValue;

  switch (step) {
    case 1:
      bodyValue = <PersonalInfo />;
      break;
    case 2:
      bodyValue = <CardSelectPlan />;
      break;
    case 3:
      bodyValue = <AddOns />;
      break;
    case 4:
      bodyValue = <CountPayment />;
      break;
    default:
      bodyValue = <PersonalInfo />;
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
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  step: selectStep,
});

export default injectIntl(connect(mapStateToProps)(Home));
