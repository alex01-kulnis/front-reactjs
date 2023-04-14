import { Notify } from "../../service/toasts";

import { ErrorAction } from "..";

import errorMessages from "../errorMessages";
import statuses from "../errorStatuses";
import statusCodes from "../statusCodes";

export const userAlreadyExistAction: ErrorAction = (status, statusCode: any) => {
  if (status === statuses.badRequest && statusCode === statusCodes.USER_ALREADY_EXIST) {
    Notify.error(errorMessages.USER_ALREADY_EXIST);
  }
};

export const internalErrorAction: ErrorAction = (status, statusCode) => {
  if (status === statuses.internal) {
    Notify.error(errorMessages.INTERNAL_ERROR);
  }
};

export const EmptyFieldsAction: ErrorAction = (status, statusCode) => {
  if (status === statuses.badRequest && statusCode === statusCodes.EMPTY_FIELD) {
    Notify.error(errorMessages.EMPTY_FIELD);
  }
};
