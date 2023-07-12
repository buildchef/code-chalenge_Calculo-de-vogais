export class ErroInput extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = 'ErroInput';
        Object.setPrototypeOf(this, ErroInput.prototype);
    }
}