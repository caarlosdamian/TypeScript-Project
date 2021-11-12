// import { LazyPage1, LazyPage2, LazyPage3, LazyPage4 } from "../pages";

import { lazy } from "react";
import { NoLazy } from "../pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

// const LazyPage2 = lazy(
//   () => import(/* webpackChunkName: "LazyPage1"*/ "../pages/LazyPage2")
// );
// const LazyPage3 = lazy(
//   () => import(/* webpackChunkName: "LazyPage2"*/ "../pages/LazyPage3")
// );
// const LazyPage4 = lazy(
//   () => import(/* webpackChunkName: "LazyPage3"*/ "../pages/LazyPage4")
// );
// const LazyLayout =
// );

export const routes: Route[] = [
  {
    path: "/lazyload",
    name: "LazyLoad Nested",
    component: lazy(
      () => import(/* webpackChunkName: "LazyLoad" */ "../layout/LazyLayout")
    ),
  },

  {
    path: "/no-lazy",
    name: "No Lazy",
    component: NoLazy,
  },
  // {
  //   path: "/lazy2",
  //   component: LazyPage2,
  //   name: "LazyPage-2",
  // },
  // {
  //   path: "/lazy3",
  //   component: LazyPage3,
  //   name: "LazyPage-3",
  // },
  // {
  //   path: "/lazy4",
  //   component: LazyPage4,
  //   name: "LazyPage-4",
  // },
];
