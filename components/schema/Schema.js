import * as yup from "yup";

export const schema = yup.object().shape({
    password: yup.string().required(),
    email: yup.string().email().required(),
});