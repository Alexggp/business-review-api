import { NextFunction, Request, Response } from "express";

import { validationPipe } from "./validation-pipe";

type errorMessage = {
  errors: object[];
};

export const validationMiddleware =
  // eslint-disable-next-line
  (validationSchema: new () => {}) =>
    async (req: Request, res: Response, next: NextFunction) => {
      const result: errorMessage = await validationPipe(validationSchema, {
        ...req.body,
        ...req.params,
      });
      if (result.errors?.length) {
        console.log(result);
        return res.status(400).json({
          success: false,
          ...result,
        });
      }

      next();
      return true;
    };
