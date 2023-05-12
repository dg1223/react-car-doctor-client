import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      // home component of the home page
      {
        path: "/",
        element: <Main></Main>,
      },
    ],
  },
]);

export default router;
