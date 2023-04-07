import { NavigateFunction } from 'react-router-dom';

import { AppThunk } from '../store';

import { userService } from '../../service/user';
import { Notify } from '../../service/toasts';

export const registerUserAsync =
  (email: string, name: string, password: string, navigate: NavigateFunction): AppThunk<void> =>
  async () => {
    const { data } = await userService.registerUser(email, name, password);
    console.log('data', data);
    Notify.success('Вы успешно авторизованы!');
    navigate('/auth');
  };
