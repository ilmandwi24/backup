import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { createTheme, Skeleton, ThemeProvider } from '@mui/material';

import { selectLoading, selectStep } from '@containers/App/selectors';

import Sidebar from '@components/Sidebar';
import AddOns from '@components/Add-Ons';
import PersonalInfo from '@components/PersonalInfo';
import CardSelectPlan from '@components/SelectPlan/CardSelectPlan';
import CountPayment from '@components/CountPayment';
import classes from './style2.module.scss';

const themeStyles = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h1',
          h3: 'h1',
          h4: 'h1',
          h5: 'h1',
          h6: 'h1',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Ubuntu, Arial, sans-serif',
    judul: {
      fontSize: 25,
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: 30,
      },
      // marginBottom: '100px',
      // color: 'yellow',
    },
    desc: {
      // fontSize: 16,
      // margin: 0,
      // color: blue,
      fontSize: '15px',
      color: 'gray',
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Ubuntu, Arial, sans-serif';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

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
    <ThemeProvider theme={themeStyles}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Sidebar />
          <div className={classes.containerContent}>
            <div className={classes.content}>{bodyValue}</div>
          </div>
        </div>
      </div>
    </ThemeProvider>
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
