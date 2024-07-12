import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { selectLocale, selectTheme } from '@containers/App/selectors';

import Navbar from '@components/Navbar';
import classes from './style.module.scss';

const themeStyles = createTheme({
  typography: {
    fontFamily: 'Ubuntu, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Ubuntu';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

const MainLayout = ({ children, locale, theme }) => (
  <ThemeProvider theme={themeStyles}>
    <div className={classes.container}>
      <Navbar locale={locale} theme={theme} />
      <div className={classes.children}>{children}</div>
    </div>
  </ThemeProvider>
);

const mapStateToProps = createStructuredSelector({
  locale: selectLocale,
  theme: selectTheme,
});

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.string,
  theme: PropTypes.string,
};

export default injectIntl(connect(mapStateToProps)(MainLayout));
