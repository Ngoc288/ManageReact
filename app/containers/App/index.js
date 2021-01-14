/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';
import { configureStore } from 'store';
import routes from './routes';
import {
  ScrollReset,
  GoogleAnalytics,
  CookiesNotification,
} from '../components';
import 'mixins/chartjs';
import 'mixins/moment';
import 'mixins/validate';
import 'mixins/prismjs';
import theme from 'theme';
import 'mock';
import 'scss/index.scss';

const store = configureStore();
const history = createBrowserHistory();

export default function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={history}>
            <ScrollReset />
            <GoogleAnalytics />
            <CookiesNotification />
            {renderRoutes(routes)}
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
