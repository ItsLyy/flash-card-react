/**
 * Node Modules
 */
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";

/**
 * Custom Modules
 */
import { ROUTES } from "./routes.config";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
