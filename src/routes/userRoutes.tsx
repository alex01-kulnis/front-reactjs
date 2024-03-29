import { MainPage, NotFoundPage } from "../pages";
import { ElementRoutes } from "../types/routes";

const defaultRoutes: ElementRoutes = [
  {
    path: "/",
    element: MainPage,
  },
  {
    path: "/*",
    element: NotFoundPage,
  },
];

export { defaultRoutes };
