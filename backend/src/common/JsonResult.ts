
export const SUCCESS_STATUS = 0;
export const SUCCESS_MESSAGE = 'ok';

export const FAIL_STATUS = -1;

export const FAIL_MESSAGE = 'error';

export default class JsonResult {
  status: number;

  message: string;

  data: any;

  constructor(status: number, message: string, data: JSON) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  static SUCCESS(data: any, message = SUCCESS_MESSAGE, status = SUCCESS_STATUS) {
    return new JsonResult(status, message, data);
  }

  static FAIL(data: any, message = FAIL_MESSAGE, status = FAIL_STATUS) {
    return new JsonResult(status, message, data);
  }
}
