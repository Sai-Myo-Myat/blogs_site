import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { BlogProvider } from "./context/blog_context";
import { AuthProvider } from "./context/auth_context";

//importing styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BlogProvider>
    </BrowserRouter>
  </React.StrictMode>
);
