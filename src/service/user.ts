import api from './api';

class UserService {
  async loginUser(email: string, password: string) {
    return await api.post('/api/user/login', {
      email,
      password,
    });
  }
}
const userService = new UserService();
export { userService };
