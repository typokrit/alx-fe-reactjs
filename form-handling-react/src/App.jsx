import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div>
      <h1 className="text-center text-2xl mt-4">Controlled Form</h1>
      <RegistrationForm />

      <h1 className="text-center text-2xl mt-10">Formik Form</h1>
      <FormikForm />
    </div>
  );
}

export default App;
