export class Growdever {
    constructor(
        private _id: string,
        private _nome: string,
        private _idade: number
    ) {}

    public get id(): string {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get idade(): number {
        return this._idade;
    }

    public toJson() {
        return {
            id: this._id,
            nome: this._nome,
            idade: this._idade,
        };
    }
}
