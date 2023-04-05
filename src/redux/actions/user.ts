import { NavigateFunction } from 'react-router-dom';

import { AppThunk } from '../store';

import { userService } from '../../service/user';

export const registerUserAsync =
  (email: string, name: string, password: string, navigate: NavigateFunction): AppThunk<void> =>
  async (dispatch) => {
    console.log('registerUserAsync');

    const { data } = await userService.registerUser(email, name, password);
    //     const { user, accessToken, refreshToken } = data;
    //     setAccessToken(accessToken);
    //     setRefreshToken(refreshToken);
    //     Notify.success('Вы успешно зарегистрированы!');
    //     dispatch(setUserData(user));
    console.log('console', data);

    navigate('/auth');
  };
