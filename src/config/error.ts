import { logger } from "./logger";
import { Response } from "express";

class ErrorHandler extends Error {
  statusCode: number;
  message: string;
  errString: string;
  constructor(statusCode: number, message: string, errString: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.errString = errString;
    logger.error(
      "ERRORS: status code: " +
        statusCode +
        " << DETAILS >>" +
        message +
        " << ERRSTRING >>" +
        errString
    );
  }
}

const handleError = (err: ErrorHandler, res: Response) => {
  const { statusCode, message, errString } = err;
  res.status(statusCode).json({
    result: "error",
    statusCode,
    message,
    errString,
  });
};

export { ErrorHandler, handleError };
