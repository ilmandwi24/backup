import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLocale, selectTheme } from '@containers/App/selectors';

import Navbar from '@components/Navbar';
import classes from './style.module.scss';

const MainLayout = ({ children, locale, theme }) => (
  <div className={classes.container}>
    <Navbar locale={locale} theme={theme} />
    <div className={classes.children}>{children}</div>
  </div>
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
