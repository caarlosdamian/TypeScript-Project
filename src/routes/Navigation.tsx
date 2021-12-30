import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import {
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
  RegisterFormikPage,DynamicForm
} from "../03-forms/pages/";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>
                Formik basic
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstraction"
                activeClassName="nav-active"
                exact
              >
                Formik Abstraction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                activeClassName="nav-active"
                exact
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-register" activeClassName="nav-active" exact>Register Formik</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" activeClassName="nav-active" exact>Dynamic  Form</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/formik-basic" exact component={FormikBasicPage} />
          <Route path="/formik-yup" exact component={FormikYupPage} />
          <Route path="/formik-components" exact component={FormikComponents} />
          <Route path="/formik-register" exact component={RegisterFormikPage} />
          <Route path="/dynamic-form" exact component={DynamicForm} />
          <Route
            path="/formik-abstraction"
            exact
            component={FormikAbstraction}
          />

          <Route path="/users">
            <h1>Users</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
