import { NavigateFunction } from "react-router-dom";

import { AppThunk } from "../store";

import {
  internalErrorAction,
  userAlreadyExistAction,
  EmptyFieldsAction,
} from "../../error/actions/user";

import { userService } from "../../service/user";
import { Notify } from "../../service/toasts";
import errorCoverage from "../../error";

export const registerUserAsync =
  (
    email: string,
    name: string,
    password: string,
    navigate: NavigateFunction
  ): AppThunk<void> =>
  async () => {
    try {
      await userService.registerUser(email, name, password);
      Notify.success("Вы успешно зарегистрированы!");
      navigate("/auth");
    } catch (err) {
      errorCoverage(err, [userAlreadyExistAction, internalErrorAction, EmptyFieldsAction]);
    }
  };
