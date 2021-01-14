/**
 *
 * MainLayout
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function MainLayout() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

MainLayout.propTypes = {};

export default memo(MainLayout);
