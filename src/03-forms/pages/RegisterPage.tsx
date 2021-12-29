import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";
const RegisterPage = () => {
  const {
    formData,
    onChange,
    email,
    name,
    password2,
    password1,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          name="name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          name="email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no valido</span>}
        <input
          type="password"
          placeholder="Password"
          value={password1}
          onChange={onChange}
          name="password1"
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>Debe de ser de 6 letras</span>
        )}

        <input
          type="password"
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
          name="password2"
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 === password2 && (
          <span>Contra debe coincidir</span>
        )}

        <button type="submit">Create </button>
        <button type="button" onClick={resetForm}>
          Reset Form{" "}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
