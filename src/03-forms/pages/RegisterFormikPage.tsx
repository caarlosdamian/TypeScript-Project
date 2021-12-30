import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";
const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "el nombre debe de ser de 3 caracteres o mas")
            .required("Requerido")
            .max(15, "Nombre demasiado largo"),
          email: Yup.string().required("Requerido").email("Revisar formato"),
          password1: Yup.string()
            .required("Requerido")
            .min(6, "Minimo 6 caracteres"),
          password2: Yup.string()
            .required("Requerido")
            .oneOf([Yup.ref("password1")], "Las constrase;as no son iguales"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Nombre" name="name" placeholder="Carlos" />
            <MyTextInput
              label="Email"
              type="email"
              name="email"
              placeholder="Carlos@email.com"
            />
            <MyTextInput
              label="Password"
              type="password"
              name="password1"
              placeholder="*******"
            />
            <MyTextInput
              label="Password"
              type="password"
              name="password2"
              placeholder="*******"
            />

            <button type="submit">Create </button>
            <button type="button" onClick={handleReset}>
              Reset Form{" "}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
