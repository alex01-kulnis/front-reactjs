import { NavigateFunction } from 'react-router-dom';

import { AppThunk } from '../store';

import { organizationService } from '../../service/organization';

export const registerOrgAsync =
  (
    organization_name: string,
    phone: string,
    first_name: string,
    middle_name: string,
    last_name: string,
    email: string,
    login: string,
    password: string,
    navigate: NavigateFunction,
  ): AppThunk<void> =>
  async () => {
    const { data } = await organizationService.registerOrg(
      organization_name,
      phone,
      first_name,
      middle_name,
      last_name,
      email,
      login,
      password,
    );

    console.log('data org', data);
    navigate('/auth');
  };
