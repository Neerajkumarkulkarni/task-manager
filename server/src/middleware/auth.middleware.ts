import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/response";

export const requireDeleteAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers["x-delete-auth"] !== "ALLOW_DELETE") {
    return res.status(403).json(errorResponse("Unauthorized delete"));
  }
  next();
};