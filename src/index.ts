import express, { Request, Response } from "express";
import { growdevers } from "./database/growdevers";
import { Growdever } from "./models/growdever";
import { GrowdeverController } from "./controllers/growdever.controller";

const app = express();
app.use(express.json());

// Rotas de growdever => /growdever

// Listar growdevers
// GET http://localhost:3333/growdever
app.get("/growdever", (req: Request, res: Response) => {
    try {
        const { idade } = req.query;

        let result = growdevers;

        if (idade) {
            result = growdevers.filter(
                (growdever) => growdever.idade === Number(idade)
            );
        }

        return res.status(200).send({
            ok: true,
            message: "Growdevers were successfully listed",
            data: result.map((growdever) => growdever.toJson()),
        });
    } catch (error: any) {
        return res.status(500).send({
            ok: false,
            message: error.toString(),
        });
    }
});

// Obter um growdever por ID
// GET http://localhost:3333/growdever/:id
app.get("/growdever/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const result = growdevers.find((growdever) => growdever.id === id);

        if (!result) {
            return res.status(404).send({
                ok: false,
                message: "Growdever was not found",
            });
        }

        return res.status(200).send({
            ok: true,
            message: "Growdever was successfully obtained",
            data: result.toJson(),
        });
    } catch (error: any) {
        return res.status(500).send({
            ok: false,
            message: error.toString(),
        });
    }
});

// Criar um growdever
// POST http://localhost:3333/growdever
// app.post("/growdever", (req: Request, res: Response) => {
//     return new GrowdeverController().create(req, res);
// });
// ou ..
app.post("/growdever", (req, res) =>
    new GrowdeverController().create(req, res)
);
// ou...
// app.post("/growdever", new GrowdeverController().create);

app.listen(3333, () => {
    console.log("API is running...");
});
