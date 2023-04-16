import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    // this._isAuth = false;
    // this._user = {};
    this._role = "";
    makeAutoObservable(this);
  }

  //   setIsAuth(bool) {
  //     this._isAuth = bool;
  //   }

  //   setUser(user) {
  //     this._user = user;
  //   }

  //   get isAuth() {
  //     return this._isAuth;
  //   }
  setRole(role) {
    this._role = role;
  }

  //   get user() {
  //     return this._user;
  //   }

  getRole() {
    return this._role;
  }
}
