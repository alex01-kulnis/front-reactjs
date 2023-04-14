import { NavigateFunction } from "react-router-dom";

import { AppThunk } from "../store";

import { organizationService } from "../../service/organization";
import { Notify } from "../../service/toasts";
import errorCoverage from "../../error";
import {
  EmptyFieldsAction,
  internalErrorAction,
  userAlreadyExistAction,
} from "../../error/actions/user";

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
    navigate: NavigateFunction
  ): AppThunk<void> =>
  async () => {
    // await organizationService.registerOrg(
    //   organization_name,
    //   phone,
    //   first_name,
    //   middle_name,
    //   last_name,
    //   email,
    //   login,
    //   password
    // );

    try {
      await organizationService.registerOrg(
        organization_name,
        phone,
        first_name,
        middle_name,
        last_name,
        email,
        login,
        password
      );
      Notify.success("Вы успешно зарегистрированы!");
      navigate("/auth");
    } catch (err) {
      errorCoverage(err, [userAlreadyExistAction, internalErrorAction, EmptyFieldsAction]);
    }
    // navigate("/auth");
  };
