import catchAsync from "../utils/catchAsync";
import * as userService from "../services/user.service";
import { handleError, ErrorHandler } from "../config/error";
const getAll = catchAsync(async (_req, res) => {
  const methodName = "/getAll";
  try {
    const category = await userService.getAll();
    res.status(200).json(category);
  } catch (err: any) {
    handleError(new ErrorHandler(500, methodName, err), res);
  }
});

export { getAll };
