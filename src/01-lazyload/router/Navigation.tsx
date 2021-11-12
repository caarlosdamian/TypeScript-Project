import React from "react";
import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { LazyPage2, LazyPage3, LazyPage1 } from "../pages";

export const Navigation = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h2>LazyLayout Pages</h2>
      <ul>
        <li>
          <Link to={`${url}/lazy1`}>Lazy Page1</Link>
        </li>
        <li>
          <Link to={`${url}/lazy2`}>Lazy Page2</Link>
        </li>
        <li>
          <Link to={`${url}/lazy3`}>Lazy Page3</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/lazy1`} component={LazyPage1} />
        <Route exact path={`${path}/lazy2`} component={LazyPage2} />
        <Route exact path={`${path}/lazy3`} component={LazyPage3} />
        <Redirect to={`${path}/lazy1`} />
      </Switch>
    </div>
  );
};
