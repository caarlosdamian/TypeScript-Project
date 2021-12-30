import { Formik, Form } from "formik";
import { idText } from "typescript";
import * as Yup from "yup";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";


const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    initialValues[ input.name ] = input.value;

    if ( !input.validations ) continue;

    let schema = Yup.string()

    for (const rule of input.validations ) {
        if ( rule.type === 'required' ) {
            schema = schema.required('Este campo es requerido');
        }

        if ( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 2, `Mínimo de ${ (rule as any).value || 2 } caracteres`);
        }

        if ( rule.type === 'email' ) {
            schema = schema.email( `Revise el formato del email`);
        }

        // ... otras reglas
    }

    requiredFields[input.name] = schema;
}


const validationSchema = Yup.object({ ...requiredFields });
const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({}) => (
          <Form>
            {formJson.map(({ label, name, placeholder, type, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                    type={type as any}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option>Select an option</option>
                    {options?.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
            })}

            <button type="submit">Create </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
