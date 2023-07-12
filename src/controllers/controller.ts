import express from "express";
import { ErroInput } from "../errors/erroInput";
import { MinhaService } from "../services/service";
import { IInputBody } from "../utils/input";
import { MensagemErro } from "../utils/mensagemErro";
import { validaInput } from "../validators/validaInput";

const minhaService = new MinhaService();
export class Controller {

    rotaTeste(req: express.Request, res: express.Response): void {
        try {
            const { error } = validaInput(req.params.entrada);
            if (error) {
                throw new ErroInput(MensagemErro.CARACTERE_INVALIDO);
            }

            const validInput: IInputBody = {
                input: req.params.entrada
            }
            res.json(minhaService.contagemVogais(validInput));

        } catch (error: any) {
            res.json(error.message);
        }
    }
}