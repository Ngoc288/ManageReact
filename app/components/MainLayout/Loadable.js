/**
 *
 * Asynchronously loads the component for MainLayout
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
