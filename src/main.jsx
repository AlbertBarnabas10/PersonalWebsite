import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About/About.jsx";
import Archive from "./pages/Archive.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import { ThemeProvider } from "./Context.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  // { path: "/archive", element: <Archive /> },
  // { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    <main className={`transition-all duration-1000`}>
      <RouterProvider router={router} />
    </main>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
