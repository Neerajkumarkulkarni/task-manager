import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/response";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  res.status(500).json(errorResponse("Internal Server Error"));
};