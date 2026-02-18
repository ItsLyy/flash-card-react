/**
 * Node Modules
 */
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import { lazy } from "react";

/**
 * Custom Modules
 */
import { ROUTES } from "./routes.config";

/**
 * Layouts
 */
import RootLayout from "@layouts/RootLayout";
import FlashcardLayout from "@features/flashcard/layouts/FlashcardLayout";

const Home = lazy(() => import("@features/home"));
const FlashcardDetail = lazy(() => import("@features/flashcard"));

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path={ROUTES.FLASHCARD} element={<FlashcardLayout />}>
          <Route path={ROUTES.FLASHCARD_DETAIL} element={<FlashcardDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
