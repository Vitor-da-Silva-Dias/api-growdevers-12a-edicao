import { Growdever } from "../models/growdever";
import { Skill } from "../models/skill.model";

export const growdevers = [
    new Growdever("José", 20, 11785914090),
    new Growdever("Joana", 30, 37292561063),
    new Growdever("Daphne", 3, 191),
    new Growdever("Bruna", 25, 24704114082),
    new Growdever("Leandro", 30, 66751370008),
];

growdevers[0].skills.push(new Skill("node.js", true));
growdevers[0].skills.push(new Skill("backend", true));
growdevers[1].skills.push(new Skill("react", true));
growdevers[1].skills.push(new Skill("node.js", false));
