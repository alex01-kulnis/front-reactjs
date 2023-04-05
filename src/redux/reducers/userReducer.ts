const initialState: any = {
  isAppLoading: true,
  isAuth: false,
  user: null,
  userSubs: [],
  isPageLoading: true,
  foreignUser: null,
  userError: '',
};
const userReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    // case 'sad':
    //   return {
    //     ...state,
    //     isAuth: true,
    //     user: { ...action.payload },
    //   };
    default:
      return state;
  }
};
export default userReducer;
