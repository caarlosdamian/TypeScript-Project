import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components Tutorial</h1>
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
          <Form noValidate>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage component="span" name="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage component="span" name="lastName" />
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage component="span" name="email" />

            <label htmlFor="jobType">Tipo de Trabajo</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It-Senior</option>
              <option value="it-jr">it-Jn</option>
            </Field>
            <ErrorMessage component="span" name="jobType" />

            <label>
              <Field name="terms" type="checkbox" />
              Terminos y Condiciones
            </label>
            <ErrorMessage component="span" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponents;
