export interface IEnvironment {
    app: { port: number };
}

export const environment: IEnvironment = {
    app: {
        port: 3000
    }
};