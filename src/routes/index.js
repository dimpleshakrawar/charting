import { createBrowserRouter } from "react-router-dom";
import ChartPage from "../pages/ChartPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <ChartPage/>
    },
  ]);

  export default router
  