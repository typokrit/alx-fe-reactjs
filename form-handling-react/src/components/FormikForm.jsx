import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Form Submitted:", values);
    alert("Registration successful!");
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label>Username</label>
            <Field name="username" className="border p-2 w-full" />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label>Email</label>
            <Field name="email" type="email" className="border p-2 w-full" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label>Password</label>
            <Field
              name="password"
              type="password"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
