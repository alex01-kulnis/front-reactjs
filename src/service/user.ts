import api from './api';

class UserService {
  async registerUser(email: string, login: string, password: string) {
    console.log('email', email);
    console.log('login', login);
    console.log('password', password);

    return await api.post('/api/user/register', {
      email,
      login,
      password,
    });
  }
}
const userService = new UserService();
export { userService };
