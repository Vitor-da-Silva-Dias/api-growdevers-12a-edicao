import { growdevers } from "../database/growdevers";
import { Growdever } from "../models/growdever";
import { Request, Response } from "express";

export class GrowdeverController {
    public create(req: Request, res: Response) {
        try {
            const { nome, idade } = req.body;

            if (!nome) {
                return res.status(400).send({
                    ok: false,
                    message: "Nome was not provided",
                });
            }

            if (!idade) {
                return res.status(400).send({
                    ok: false,
                    message: "Idade was not provided",
                });
            }

            const growdever = new Growdever(nome, idade);
            growdevers.push(growdever);

            return res.status(201).send({
                ok: true,
                message: "Growdever was successfully created",
                data: growdever,
            });
        } catch (error: any) {
            return res.status(500).send({
                ok: false,
                message: error.toString(),
            });
        }
    }

    public list() {}

    public get() {}

    public update() {}
}
