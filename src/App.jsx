import { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import "bootstrap";

//importing components
import Nav from "./components/nav_bar/nav.component";

//importing pages
const HomePage = lazy(() => import("./pages/home/home.page"));
import AboutPage from "./pages/about/about.page";
import CreateBlogsPage from "./pages/create_blog/create_blog.page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback="loading">
              <HomePage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <Suspense fallback="loading">
              <AboutPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/create-blogs"
          element={
            <Suspense fallback="laoding">
              <CreateBlogsPage />
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
