import { Formik , Form } from "formik";
import { useState } from "react";
import Input from "../common/input.component";

const LogIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
    };
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "admin" && password === "1234") {
            props.history.Push("/");
        } else {
            // error
            if (email === "") setErrors({ email: "Need email", password: "" });
            if (password === "")
                setErrors({ email: "", password: "Need password" });
            else {
                setErrors({ email: "", password: "wrong pass or email" });
            }
        }
    };

    return (
        <>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.setSubmitting(false);
                }}
            >
            {
                (formikProps)=> (
                    <Form onSubmit={formikProps.handleSubmit}>

                    </Form>
                )
            }

            </Formik>

            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>

                    <Input
                        type="text"
                        id="email"
                        value={email}
                        handleChange={handleEmailChange}
                        error={errors.email}
                    />

                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Input
                        type="text"
                        id="password"
                        value={password}
                        error={errors.password}
                        handleChange={handlePasswordChange}
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default LogIn;
