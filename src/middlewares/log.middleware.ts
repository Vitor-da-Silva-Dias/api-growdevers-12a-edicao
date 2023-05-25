import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../util/http-response.adapter";

export class LogMiddleware {
    public static logRequest(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.method);
            console.log(req.ip);
            console.log(req.hostname);

            next();
        } catch (error: any) {
            return ApiResponse.serverError(res, error);
        }
    }
}
