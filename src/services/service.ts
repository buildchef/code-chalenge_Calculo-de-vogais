import { IInputBody } from "../utils/input";
import { IOutput } from "../utils/output";
import { validarVogais } from "../utils/validarvogais";

export class MinhaService {
    contagemVogais(entrada: IInputBody): IOutput {
        const { input } = entrada;
        let somaVogais: number = 0;
        let somaLetras: number = 0;

        for (const letra of input) {
            somaLetras++;
            somaVogais += validarVogais(letra);
        };
        return {
            quantidadeCaracteres: somaLetras,
            quantidadeVogais: somaVogais
        };
    };
}