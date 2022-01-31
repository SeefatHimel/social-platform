import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import loginSchema from "../../schema/login.schema";

const LogIn = (props) => {
    return (
        <>
            <div className="card bg-light mb-3" style={{ margin: "auto", maxWidth: "50rem" }}>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        rememberCheck: "",
                    }}
                    validationSchema={loginSchema}
                    onSubmit={(values, actions) => {
                        console.log(values);
                        actions.setSubmitting(false);
                    }}
                >
                    {(formikProps) => (
                        <Form
                            onSubmit={formikProps.handleSubmit}
                            className="px-4 py-3"
                        >
                            <div className="form-group">
                                <label
                                    className="form-label"
                                    htmlFor="exampleInputEmail1"
                                >
                                    Email address{" "}
                                    <span className="text-danger">*</span>
                                </label>

                                <Field
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                />
                                <div className="invalid-feedback d-block">
                                    <ErrorMessage name="email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label
                                    className="form-label"
                                    htmlFor="exampleInputEmail1"
                                >
                                    Password
                                    <span className="text-danger">*</span>
                                </label>

                                <Field
                                    type="text"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                />
                                <div className="invalid-feedback d-block">
                                    <ErrorMessage name="password" />
                                </div>
                                <div className="form-check">
                                    <Field
                                        type="checkbox"
                                        className="form-check-input"
                                        id="rememberCheck"
                                        name="rememberCheck"
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="rememberCheck"
                                    >
                                        Remember me
                                    </label>
                                    <div className="invalid-feedback d-block">
                                        <ErrorMessage name="rememberCheck" />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn btn-primary"
                                >
                                    log in
                                </button>
                            </div>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/signUp">
                                New around here? Sign up
                            </Link>
                            <Link className="dropdown-item" to="/">
                                Forgot password?
                            </Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default LogIn;
