import { v4 as createUuid } from "uuid";

export class Growdever {
    private _id: string;

    constructor(private _nome: string, private _idade: number) {
        this._id = createUuid();
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

    public toJson() {
        return {
            id: this._id,
            nome: this._nome,
            idade: this._idade,
        };
    }
}
