import { vogais } from "./vogais";

export function validarVogais(letra: string): number {
    for (const vogal of vogais.vogais) {
        if (letra == vogal) {
            return 1;
        };
    };
    return 0;
}