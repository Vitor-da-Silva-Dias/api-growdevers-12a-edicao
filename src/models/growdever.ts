import { v4 as createUuid } from "uuid";
import { Skill } from "./skill.model";
import { cpf as cpfValidator } from "cpf-cnpj-validator";

export class Growdever {
    private _id: string;
    private _skills: Skill[];

    constructor(
        private _nome: string,
        private _idade: number,
        private _cpf: number
    ) {
        this._id = createUuid();
        this._skills = [];
    }

    public get id(): string {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get idade(): number {
        return this._idade;
    }

    public set idade(idade: number) {
        this._idade = idade;
    }

    public get skills() {
        return this._skills;
    }

    public get cpf() {
        return this._cpf;
    }

    public toJson() {
        return {
            id: this._id,
            nome: this._nome,
            idade: this._idade,
            cpf: cpfValidator.format(this._cpf.toString().padStart(11, "0")),
        };
    }
}
