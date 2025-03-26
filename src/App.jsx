import { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./components/loader/Loader";

const Home = lazy(() => import("./pages/home/Home"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Github = lazy(() => import("./components/github/Github"));
const Editor = lazy(() => import("./pages/editor/Editor"));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div className="App" id={`${darkMode ? `dark` : `light`}-mode`}>
      <Suspense fallback={<Loader />}>
        <Router>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/github" element={<Github />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
