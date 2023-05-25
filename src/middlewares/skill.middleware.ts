import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../util/http-response.adapter";

export class SkillMiddleware {
    public static validateCreateFields(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            const { nome, isActive } = req.body;

            if (!nome) {
                return res.status(400).send({
                    ok: false,
                    message: "Nome was not provided",
                });
            }

            if (!isActive) {
                return res.status(400).send({
                    ok: false,
                    message: "isActive was not provided",
                });
            }

            next();
        } catch (error: any) {
            return ApiResponse.serverError(res, error);
        }
    }
}
