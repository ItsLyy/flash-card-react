/**
 * Node Modules
 */
import { createRoot } from "react-dom/client";

/**
 * Custom Modules
 */
import App from "./App.tsx";

/**
 * Styles
 */
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
