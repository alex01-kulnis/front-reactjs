import { NavigateFunction } from 'react-router-dom';

import { AppThunk } from '../store';

import { userService } from '../../service/user';
import { Notify } from '../../service/toasts';

export const registerUserAsync =
  (email: string, name: string, password: string, navigate: NavigateFunction): AppThunk<void> =>
  async () => {
    try {
      await userService.registerUser(email, name, password);
      Notify.success('Вы успешно зарегистрированы!');
      navigate('/auth');
    } catch (error: any) {
      Notify.error(error.response.data.message);
    }
  };
