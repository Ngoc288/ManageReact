/**
 *
 * Demo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDemo from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Demo() {
  useInjectReducer({ key: 'demo', reducer });
  useInjectSaga({ key: 'demo', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Demo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  demo: makeSelectDemo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Demo);
