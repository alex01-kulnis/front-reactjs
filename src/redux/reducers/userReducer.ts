import { UserActionTypes } from "../../types/User";

const initialState: any = {
  // isAppLoading: true,
  isAuth: false,
  user: null,
  role: "",
  // userSubs: [],
  // isPageLoading: true,
  // foreignUser: null,
  // userError: '',
};
const userReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case UserActionTypes.SET_USER_DATA:
      return {
        ...state,
        isAuth: true,
        user: { ...action.payload },
      };
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
