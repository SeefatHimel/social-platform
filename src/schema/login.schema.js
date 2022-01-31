import { string, object, array, date, number } from "yup";

const loginSchema = object().shape({
    email: string()
        .trim()
        .email()
        .min(2, "This field must be at least 2 characters long")
        .max(30, "This field must be at most 30 characters long")
        .required("This field must not be empty"),

    password: string()
        .max(50, "This field must be at most 50 characters long")
        .required("This field must not be empty"),
});

export default loginSchema;
