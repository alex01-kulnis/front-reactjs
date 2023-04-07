import api from './api';

class UserService {
  async registerUser(email: string, login: string, password: string) {
    return await api.post('/api/user/register', {
      email,
      login,
      password,
    });
  }
}
const userService = new UserService();
export { userService };
