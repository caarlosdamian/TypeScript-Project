import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "../01-lazyload/router/routes";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink to={path} activeClassName="nav-active" exact>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Switch>
            {routes.map(({ path, component }) => (
              <Route key={path} path={path} component={component} />
            ))}
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
