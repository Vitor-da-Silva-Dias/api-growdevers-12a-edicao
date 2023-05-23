import { Growdever } from "../models/growdever";
import { Skill } from "../models/skill.model";

export const growdevers = [
    new Growdever("José", 20),
    new Growdever("Joana", 30),
    new Growdever("Daphne", 3),
    new Growdever("Bruna", 25),
    new Growdever("Leandro", 30),
];

growdevers[0].skills.push(new Skill("node.js", true));
growdevers[0].skills.push(new Skill("backend", true));
growdevers[1].skills.push(new Skill("react", true));
growdevers[1].skills.push(new Skill("node.js", false));
