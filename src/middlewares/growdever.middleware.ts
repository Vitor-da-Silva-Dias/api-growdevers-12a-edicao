import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../util/http-response.adapter";
import { growdevers } from "../database/growdevers";

export class GrowdeverMidlleware {
    public static validateCreateFields(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            const { nome, idade, cpf } = req.body;

            if (!nome) {
                return ApiResponse.notProvided(res, "Nome");
            }

            if (!idade) {
                return ApiResponse.notProvided(res, "Idade");
            }

            if (!cpf) {
                return ApiResponse.notProvided(res, "CPF");
            }

            next();
        } catch (error: any) {
            return ApiResponse.serverError(res, error);
        }
    }

    public static validateCpfAlreadyExists(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            const { cpf } = req.body;

            const growdever = growdevers.some(
                (growdever) => growdever.cpf === Number(cpf)
            );
            if (growdever) {
                ApiResponse.badRequest(
                    res,
                    "Growdever already exists with CPF: " + cpf
                );
            }

            next();
        } catch (error: any) {
            return ApiResponse.serverError(res, error);
        }
    }
}
