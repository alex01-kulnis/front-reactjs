import api from './api';

class OrganizationService {
  async registerOrg(
    organization_name: string,
    phone: string,
    first_name: string,
    middle_name: string,
    last_name: string,
    email: string,
    login: string,
    password: string,
  ) {
    return await api.post('/api/org/register', {
      organization_name,
      phone,
      first_name,
      middle_name,
      last_name,
      email,
      login,
      password,
    });
  }
}
const organizationService = new OrganizationService();
export { organizationService };
