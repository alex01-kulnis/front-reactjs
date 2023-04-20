import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    // this._user = {};
    this._role = "";
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  getAuth() {
    return this._isAuth;
  }

  setRole(role) {
    this._role = role;
  }

  getRole() {
    return this._role;
  }
}
