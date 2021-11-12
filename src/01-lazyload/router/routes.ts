// import { LazyPage1, LazyPage2, LazyPage3, LazyPage4 } from "../pages";

import { lazy } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

const LazyPage2 = lazy(
  () => import(/* webpackChunkName: "LazyPage1"*/ "../pages/LazyPage2")
);
const LazyPage3 = lazy(
  () => import(/* webpackChunkName: "LazyPage2"*/ "../pages/LazyPage3")
);
const LazyPage4 = lazy(
  () => import(/* webpackChunkName: "LazyPage3"*/ "../pages/LazyPage4")
);
const LazyPage1 = lazy(
  () => import(/* webpackChunkName: "LazyPage4"*/ "../pages/LazyPage1")
);

export const routes: Route[] = [
  {
    path: "/lazy",
    component: LazyPage1,
    name: "LazyPage-1",
  },
  {
    path: "/lazy2",
    component: LazyPage2,
    name: "LazyPage-2",
  },
  {
    path: "/lazy3",
    component: LazyPage3,
    name: "LazyPage-3",
  },
  {
    path: "/lazy4",
    component: LazyPage4,
    name: "LazyPage-4",
  },
];
