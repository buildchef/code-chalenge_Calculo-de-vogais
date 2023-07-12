import Joi from "joi";
export const validaInput = (input: string) => {
    const schema = Joi.string()
        .regex(/^[a-z\s]+$/)
        .min(1)
        .max(20)
        .required();

    return schema.validate(input);
};