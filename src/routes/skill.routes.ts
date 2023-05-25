import { Router } from "express";
import { SkillController } from "../controllers/skill.controller";
import { SkillMiddleware } from "../middlewares/skill.middleware";
import { LogMiddleware } from "../middlewares/log.middleware";

export const skillRoutes = () => {
    const app = Router({
        mergeParams: true,
    });

    app.get("/", [LogMiddleware.logRequest], new SkillController().list);

    app.post(
        "/",
        [LogMiddleware.logRequest, SkillMiddleware.validateCreateFields],
        new SkillController().create
    );

    app.delete("/:skillId", new SkillController().delete);
    app.put("/:skillId", new SkillController().update);

    return app;
};
