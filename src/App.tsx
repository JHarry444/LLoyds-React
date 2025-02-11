// import About from "./components/About"
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Props from "./components/Props";
import ExternalData from "./components/ExternalData";
function App() {


  // we use () after the return because JS will insert a ; after any flow-of-control statement 
  // so it's easy to accidentally make your code unreachable
  return (
    // anything from react-router ONLY works in a router
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {" "}
        <Link to="/about">About</Link>
        {" "}
        <Link to="/props">Props</Link>
        {" "}
        <Link to="/external">External</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/props" element={<Props />} />
        <Route path="/external" element={<ExternalData />} />

        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </Router>
  )
}

export default App;
