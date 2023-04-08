import axios from 'axios';

import { Notify } from '../service/toasts';
import errorMessages from './errorMessages';

export type ErrorAction = (status: number, statusCode: string) => void;

const errorCoverage = (
  error: unknown,
  actions: ErrorAction[],
  defaultMessage: string = errorMessages.DEFAULT_MESSAGE,
) => {
  if (axios.isAxiosError(error)) {
    const status: number = error.response?.status || 0;
    const statusCode: string = error.response?.data.message;
    actions.forEach((action) => action(status, statusCode));
  } else {
    Notify.error(defaultMessage);
  }
};

export default errorCoverage;
