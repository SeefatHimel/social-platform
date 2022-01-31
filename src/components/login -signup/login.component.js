import { Formik, Form, Field, ErrorMessage } from "formik";
import loginSchema from "../../schema/login.schema";

const LogIn = (props) => {
    return (
        <>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.setSubmitting(false);
                }}
            >
                {(formikProps) => (
                    <Form onSubmit={formikProps.handleSubmit} className="px-4 py-3">
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
                            <button type="submit" className="btn btn btn-primary">log in</button>
                        </div>
                    </Form>
                )}
            </Formik>

           
        </>
    );
};

export default LogIn;
