import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components/";
import "../styles/styles.css";

const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction Tutorial</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Ingresa Formato correcto")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .required("Requerido")
            .notOneOf(["it-jr"], "Esta opcion no es permitida"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Carlos"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Damian"
            />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="john@gmail.com"
              type="email"
            />

            <MySelect name="jobType" as="select" label="JobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It-Senior</option>
              <option value="it-jr">it-Jn</option>
            </MySelect>

            <MyCheckbox name="terms" label="Terminos y Condiciones" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikAbstraction;
