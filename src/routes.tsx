import * as React from "react";
import { RouteObject } from "react-router-dom";
import Layout from "./components/Layout";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        children: [
          {
            path: "",
            element: <div>Hello</div>,
          },
          {
            path: "projects",
            element: <div>Projects</div>,
          },
        ],
      },
    ],
  },
];
