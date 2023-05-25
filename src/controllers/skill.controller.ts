import { Request, Response } from "express";
import { growdevers } from "../database/growdevers";
import { Skill } from "../models/skill.model";
import { ApiResponse } from "../util/http-response.adapter";

export class SkillController {
    public list(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const growdever = growdevers.find(
                (growdever) => growdever.id === id
            );
            if (!growdever) {
                return ApiResponse.notFound(res, "Growdever");
            }

            return res.status(200).send({
                ok: true,
                message: "Skills successfully listed",
                data: growdever.skills.map((skill) => skill.toJson()),
            });
        } catch (error: any) {
            return res.status(500).send({
                ok: false,
                message: error.toString(),
            });
        }
    }

    public create(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { nome, isActive } = req.body;

            const growdever = growdevers.find(
                (growdever) => growdever.id === id
            );
            if (!growdever) {
                return ApiResponse.notFound(res, "Growdever");
            }

            const skill = new Skill(nome, isActive);
            growdever.skills.push(skill);

            return res.status(201).send({
                ok: true,
                message: "Skill was successfully created",
                data: growdever.toJson(),
            });
        } catch (error: any) {
            return res.status(500).send({
                ok: false,
                message:
                    "Nossos servidores estão com problema, tente novamente mais tarde.",
            });
        }
    }

    public delete(req: Request, res: Response) {
        try {
            const { id, skillId } = req.params;

            const growdever = growdevers.find(
                (growdever) => growdever.id === id
            );
            if (!growdever) {
                return ApiResponse.notFound(res, "Growdever");
            }

            const skillIndex = growdever.skills.findIndex(
                (skill) => skill.id === skillId
            );
            if (skillIndex < 0) {
                return ApiResponse.notFound(res, "Skill");
            }

            const deletedSkills = growdever.skills.splice(skillIndex, 1);

            return res.status(200).send({
                ok: true,
                message: "Skill was successfully deleted",
                data: deletedSkills[0].toJson(),
            });
        } catch (error: any) {
            return res.status(500).send({
                ok: false,
                message:
                    "Nossos servidores estão com problema, tente novamente mais tarde.",
            });
        }
    }

    public update(req: Request, res: Response) {
        try {
            const { id, skillId } = req.params;
            const { nome, isActive } = req.body;

            const growdever = growdevers.find(
                (growdever) => growdever.id === id
            );
            if (!growdever) {
                return ApiResponse.notFound(res, "Growdever");
            }

            const skill = growdever.skills.find(
                (skill) => skill.id === skillId
            );
            if (!skill) {
                return ApiResponse.notFound(res, "Skill");
            }

            if (nome) {
                skill.nome = nome;
            }

            if (isActive !== undefined) {
                skill.isActive = Boolean(isActive);
            }

            return ApiResponse.success(
                res,
                "Skill was successfully updated",
                skill
            );
        } catch (error: any) {
            return ApiResponse.serverError(res, error);
        }
    }
}
