// import About from "./components/About"
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Props from "./components/Props";
import ExternalData from "./components/ExternalData";
import Counter from "./components/counter/Counter";
import PetList from "./components/counter/PetList";
import DuckContainer from "./components/inverse_data_flow/DuckContainer";
import DuckContainerFetch from "./http_requests/DuckContainerFetch";
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
        {" "}
        <Link to="/inverseDataFlow">Inverse Data Flow</Link>
        {" "}
        <Link to="/fetch">Fetch</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/props" element={<Props />} />
        <Route path="/state/counter" element={<Counter />} />
        <Route path="/state/list" element={<PetList />} />
        <Route path="/external" element={<ExternalData />} />
        <Route path="/inverseDataFlow" element={<DuckContainer />} />
        <Route path="/fetch" element={<DuckContainerFetch />} />

        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </Router>
  )
}

export default App;
