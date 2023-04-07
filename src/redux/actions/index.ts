import * as userActions from './user';
// import * as adminActions from './admin';
import * as organizationAction from './organization';

const actions = {
  ...userActions,
  ...organizationAction,
  //   ...postsAction,
};
export default actions;
